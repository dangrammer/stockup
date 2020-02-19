export const loadPortfolio = (stocks) => ({
    type: 'LOAD_PORTFOLIO',
    stocks
})

export const addStockToPortfolio = (symbol, shares, userId) => {
  const token = localStorage.token

  if (token) {
    return (dispatch) => {
      fetch('http://localhost:3000/stocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          symbol,
          shares,
          user_id: userId
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          dispatch({type: 'STOCK_ERRORS', errors: ['Addition To Portfolio Failed']})
          setTimeout(() => dispatch({type: 'CLEAR_STOCK_ERRORS'}), 2500)
        } else {
          const info = data.stock.data
          // this is a messy workaround for now, due to fetched format discrepency
          const stock = {
            id: parseInt(info.id),
            symbol: info.attributes.symbol,
            shares: info.attributes.shares,
            user_id: parseInt(info.relationships.user.data.id),
          }
          dispatch({type: 'ADD_STOCK', stock: stock})
        }
      })
    }
  }
}

export const increaseShares = (stockId, shares) => {
  const token = localStorage.token

  if (token) {
    return (dispatch) => {
      fetch(`http://localhost:3000/stocks/${stockId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          shares
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          dispatch({type: 'STOCK_ERRORS', errors: ['Update To Portfolio Failed']})
          setTimeout(() => dispatch({type: 'CLEAR_STOCK_ERRORS'}), 2500)
        } else {
          const info = data.data
          // this is a messy workaround for now, due to fetched format discrepency
          const stock = {
            id: parseInt(info.id),
            symbol: info.attributes.symbol,
            shares: info.attributes.shares,
            user_id: parseInt(info.relationships.user.data.id),
          }
          dispatch({type: 'INCREASE_SHARES', stock: stock})
        }
      })
    }
  }
}

export const checkPrice = (symbol) => {
  const token = localStorage.token
  
  return (dispatch) => {
    if (token) {
      fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.REACT_APP_AV_KEY}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        const quote = data['Global Quote']
        if (quote) {
          const open = quote['02. open']
          const price = quote['05. price']
          dispatch({type: 'ADD_PRICE', price: {symbol, open, price}})
        } else {
          console.log('fetching data...')
        }
      })
    }
  }
}