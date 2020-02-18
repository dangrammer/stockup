import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {validateTransaction} from '../../actions/transactionActions'

const PurchaseForm = () => {
  const dispatch = useDispatch()
  const [symbol, setSymbol] = useState('')
  const [shares, setShares] = useState('')
  const user = useSelector(state => state.currentUserReducer.currentUser)
  const validating = useSelector(state => state.transactionReducer.validating)
  const errors = useSelector(state => state.transactionReducer.errors)

  const clearForm = () => {
    setSymbol('')
    setShares('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(validateTransaction(symbol, shares, user))
    clearForm()
  }

  return (
    <div>
      <h1>Purchase Form</h1>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {validating ? <span>Validating . . .</span> : null}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={symbol}
          placeholder='Ticker Symbol'
          onChange={event => setSymbol(event.target.value.toUpperCase())}
        />
        <br/>
        <input
          type='number'
          value={shares}
          placeholder='Shares (QTY)'
          onChange={event => {
            setShares(event.target.value)
            // if (Number.isInteger(parseInt(event.target.value))) {
            //   setShares(event.target.value)
            // } else {
            //   console.log(typeof event.target.value.split('.')[0])
            //   setShares(event.target.value.split('.')[0])
            // }
          }}
        />
        <br/>
        <input type='submit' value='Buy'/>
      </form>
    </div>
  )
}

export default PurchaseForm