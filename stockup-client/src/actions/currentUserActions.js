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
        console.log(data)
        // data.user ?
        //   dispatch(loginUser(data.user.data)) :
        //     localStorage.removeItem('token')
      })
    }
  }
}

export const validateUser = (returningUser, history) => {
  const {username, password} = returningUser

  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
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
        // history.push('/listings')
      }
    }) 
  }
}

export const createUser = (newUser, history) => {
  const {username, password, email} = newUser

  return (dispatch) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        email,
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
        // history.push('/dashboard/profile/edit')
      }
    })
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
