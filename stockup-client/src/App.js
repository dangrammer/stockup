import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Welcome from './components/Welcome'

const App = () => {
  
  return (
    <div>
      <Route exact path='/' component={Welcome}/>
      <Redirect to='/'/>
    </div>
  )
}

export default App