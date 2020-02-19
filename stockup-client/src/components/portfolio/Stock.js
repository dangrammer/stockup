import React from 'react'
import {currencyFormatter} from '../../actions/currencyFormatter'

const Stock = ({symbol, shares, prices}) => {

  return (
    <li>{symbol} | {shares} {shares === 1 ? 'share' : 'shares'} | @ {prices ? currencyFormatter(prices.price) : 'Calculating...'} </li>
  )
}

export default Stock