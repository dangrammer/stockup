import React, {useState} from 'react'
import {validateUser} from '../actions/currentUserActions'
import {createUser} from '../actions/currentUserActions'
import {useDispatch, useSelector} from 'react-redux'

const Login = ({history}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState(true)
  const errors = useSelector(state => state.currentUserReducer.errors)
  
  const clearForm = () => {
    setUsername('')
    setPassword('')
    setEmail('')
  }

  const handleClick = () => {
    setLogin(!login)
    dispatch({type: 'CLEAR_USER_ERRORS'})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let user 

    if (login) {
      user = {email, password} 
      dispatch(validateUser(user, history))
    } else {
      user = {username, email, password}
      dispatch(createUser(user, history))
    }  
    clearForm()
  }

  return (
    <div>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        {login ? null :
          <input
            type='text'
            value={username}
            placeholder='Username'
            onChange={event => setUsername(event.target.value)}
          />
        }
        <input
          type='text'
          value={email}
          placeholder='Email'
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        <br/>
        <input type='submit' value={login ? 'Log In' : 'Create Account'}/>
      </form>
      <br/>
      <br/>
      <span>{login ? 'Need to create an account? ' : 'Already have an account? '}</span>
      <br/>
      <button onClick={handleClick}>{login ? 'Sign Up' : 'Log In'}</button>
    </div>
  )
}

export default Login
