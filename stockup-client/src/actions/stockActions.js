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
          dispatch({type: 'ADD_STOCK', stock: data.stock.data})
        }
      })
    }
  }
}