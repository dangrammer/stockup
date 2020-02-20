import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import PortfolioContainer from './PortfolioContainer'
import TransactionList from '../components/transactions/TransactionList'
import {checkPrice} from '../actions/stockActions'

const MainContainer = () => {
  const dispatch = useDispatch()
  const stocks = useSelector(state => state.stockReducer.stocks)

  // should prices also be fetched here?
  // should stocks and prices be fetched when App.js loads?
  // const prices = useSelector(state => state.stockReducer.prices)

  stocks.forEach(stock => dispatch(checkPrice(stock.symbol)))

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