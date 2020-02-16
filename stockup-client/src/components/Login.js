import React, {useState} from 'react'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState(true)
  
  const clearForm = () => {
    setUserName('')
    setPassword('')
    setEmail('')
  }

  const handleClick = () => {
    setLogin(!login)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {userName, password, email}
    console.log(user)
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={userName}
          placeholder='Username'
          onChange={event => setUserName(event.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        {login ? null :
          <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={event => setEmail(event.target.value)}
          />
        }
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