import React from 'react'
import {useSelector} from 'react-redux'
import {currencyFormatter} from '../../actions/currencyFormatter'

const CashBalance = () => {
  const balance = useSelector(state => state.currentUserReducer.currentUser.attributes.balance)
  
  return (
    <span>
      Cash Balance: USD {currencyFormatter(balance)}
    </span>
  )
}

export default CashBalance