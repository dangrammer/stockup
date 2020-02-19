import React from 'react'
import {currencyFormatter} from '../../actions/currencyFormatter'

const TransactionRecord = ({symbol, shares, price, date}) => {
  return (
    <div>
      <span>BUY({symbol})</span> <br/>
      <span>{`${shares} ${shares > 1 ? 'shares' : 'share'}`}</span> <br/>
      <span>@ {currencyFormatter(price)}</span> <br/>
      <span>Transaction Processed: {date}</span> <br/>
      <br/>
    </div>
  )
}

export default TransactionRecord