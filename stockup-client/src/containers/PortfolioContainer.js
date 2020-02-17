import React from 'react'
import CashBalance from '../components/portfolio/CashBalance'
import PurchaseForm from '../components/portfolio/PurchaseForm'

const PortfolioContainer = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <CashBalance/>
      <PurchaseForm/>
    </div>
  )
}

export default PortfolioContainer
