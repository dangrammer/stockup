import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {validateTransaction, recordTransaction} from '../../actions/transactionActions'
import {currencyFormatter} from '../../actions/currencyFormatter'

const PurchaseForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUserReducer.currentUser)
  const validating = useSelector(state => state.transactionReducer.validating)
  const transaction = useSelector(state => state.transactionReducer.transaction)
  const errors = useSelector(state => state.transactionReducer.errors)

  const [tickerSymbol, setTickerSymbol] = useState('')
  const [shareQty, setShareQty] = useState('')

  const {symbol, shares, price, purchaseAmount} = transaction

  const clearForm = () => {
    setTickerSymbol('')
    setShareQty('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(validateTransaction(tickerSymbol, shareQty, user))
  }
  
  const handleClick = (event) => {
    if (event.target.id === 'confirm') {
      const balance = parseFloat(user.attributes.balance)
      const record = {symbol, shares, price, userId: parseInt(user.id), balance}
      
      dispatch(recordTransaction(record))
      clearForm()
    } 
    dispatch({type: 'COMPLETED_TRANSACTION'})
  }

  return (
    <div>
      <h4>Purchase Form</h4>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {validating ? <span>Validating . . .</span> : null}
      {purchaseAmount ?
        <span>
          Purchasing {symbol} <br/>
          {shares} {shares > 1 ? 'shares' : 'share'} @ {currencyFormatter(price)} <br/> 
          Purchase Amount: {currencyFormatter(purchaseAmount)} <br/>
          <button id='confirm' onClick={handleClick}>Confirm Purchase</button> <br/>
          <button id='cancel' onClick={handleClick}>Cancel Purchase</button> 
        </span> :
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={tickerSymbol}
              placeholder='Ticker Symbol'
              onChange={event => setTickerSymbol(event.target.value.toUpperCase())}
            />
            <br/>
            <input
              type='number'
              value={shareQty}
              placeholder='Shares (QTY)'
              onChange={event => {
                if (Number.isInteger(parseFloat(event.target.value))) {
                  setShareQty(event.target.value)
                } else {
                  setShareQty(event.target.value.split('.')[0])
                }
              }}
            />
            <br/>
            <input type='submit' value='Buy'/>
          </form>
      }
    </div>
  )
}

export default PurchaseForm