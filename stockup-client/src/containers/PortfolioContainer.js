import React from 'react'
import CashBalance from '../components/portfolio/CashBalance'
import PurchaseForm from '../components/portfolio/PurchaseForm'
import StockList from '../components/portfolio/StockList'

const PortfolioContainer = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <StockList/>
      <br/>
      <CashBalance/>
      <PurchaseForm/>
    </div>
  )
}

export default PortfolioContainer
