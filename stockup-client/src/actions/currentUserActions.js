import {loadPortfolio} from './stockActions'

const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const loadProfile = () => {
  const token = localStorage.token
  
  return (dispatch) => {
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        const userObject = data.user.data
        const stockList = userObject.attributes.stockList

        if (data.user) {
          dispatch(loginUser(userObject))
          dispatch(loadPortfolio(stockList))
        } else {
          localStorage.removeItem('token')
        }
      })
    }
  }
}

export const validateUser = (returningUser, history) => {
  const {email, password} = returningUser

  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'USER_ERRORS', errors: data.errors})
        setTimeout(() => dispatch({type: 'CLEAR_USER_ERRORS'}), 5000)
      } else {
        localStorage.setItem('token', data.token)
        dispatch(loginUser(data.user.data))
        history.push('/portfolio')
      }
    }) 
  }
}

export const createUser = (newUser, history) => {
  const {username, email, password} = newUser

  return (dispatch) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        balance: 5000.00
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'USER_ERRORS', errors: data.errors})
        setTimeout(() => dispatch({type: 'CLEAR_USER_ERRORS'}), 5000)
      } else {
        localStorage.setItem('token', data.token)
        dispatch(loginUser(data.user.data))
        history.push('/portfolio')
      }
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: 'RESET_STOCKS'})
    dispatch({type: 'LOGOUT_USER'})
  }
} 

export const adjustBalance = (userId, newBalance) => {
  const token = localStorage.token

  if (token) {
    return (dispatch) => {
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          balance: newBalance 
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          dispatch({type: 'TRANSACTION_ERRORS', errors: ['Balance Error: Please contact financial institution']})
          setTimeout(() => dispatch({type: 'CLEAR_TRANSACTION_ERRORS'}), 5000)
        } else {
          dispatch({type: 'UPDATE_USER', user: data.data})
        }
      })
    }
  }
}