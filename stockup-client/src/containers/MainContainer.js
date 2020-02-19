import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import PortfolioContainer from './PortfolioContainer'
import TransactionList from '../components/transactions/TransactionList'

import {useDispatch, useSelector} from 'react-redux'
import {checkPrice} from '../actions/stockActions'

const MainContainer = () => {
  const dispatch = useDispatch()
  const stocks = useSelector(state => state.stockReducer.stocks)
  const prices = useSelector(state => state.stockReducer.prices)

  stocks.forEach(stock => dispatch(checkPrice(stock.symbol)))

  // console.log('stocks:', stocks, 'prices:', prices, 'from main container')
  
  return (
    <>
      <Switch>
        <Route path='/portfolio' component={PortfolioContainer}/>
        <Route path='/transactions' component={TransactionList}/>
        <Redirect to='/portfolio'/>
      </Switch>
    </>
  )
}

export default MainContainer