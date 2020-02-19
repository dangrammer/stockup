import React from 'react'
import {useSelector} from 'react-redux'
import Stock from './Stock'

const StockList = () => {
  const stocks = useSelector(state => state.stockReducer.stocks)
  console.log(stocks)
  
  return (
    <div>
      Stocklist (TOTAL EARNING$)
      <ul>
        <Stock/>
        <Stock/>
        <Stock/>
        <Stock/>
      </ul>
    </div>
  )
}

export default StockList