import React from 'react'

const Stock = ({symbol, shares}) => {
  return (
    <li>{symbol} | {shares} {shares === 1 ? 'share' : 'shares'} | current price</li>
  )
}

export default Stock