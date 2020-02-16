import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import PortfolioContainer from './PortfolioContainer'
import TransactionContainer from './TransactionContainer'

const MainContainer = () => {
  
  return (
    <>
      <Switch>
        <Route path='/portfolio' component={PortfolioContainer}/>
        <Route path='/transactions' component={TransactionContainer}/>
        <Redirect to='/portfolio'/>
      </Switch>
    </>
  )
}

export default MainContainer