import React, {useState} from 'react'

const PurchaseForm = () => {
  const [symbol, setSymbol] = useState('')
  const [shares, setShares] = useState('')

  const clearForm = () => {
    setSymbol('')
    setShares('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(symbol, shares)
    clearForm()
  }

  return (
    <div>
      <h1>Purchase Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={symbol}
          placeholder='Ticker Symbol'
          onChange={event => setSymbol(event.target.value)}
        />
        <br/>
        <input
          type='text'
          value={shares}
          placeholder='Shares (QTY)'
          onChange={event => setShares(event.target.value)}
        />
        <br/>
        <input type='submit' value='Buy'/>
      </form>
    </div>
  )
}

export default PurchaseForm