const initialState = {
  stocks: [],
  prices: [],
  errors: []
}

const stockReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_PORTFOLIO':
      return {...state, stocks: action.stocks}  

    case 'ADD_STOCK':
      return {...state, stocks: [...state.stocks, action.stock]}

    case 'ADD_PRICE':
      let prices = state.prices.filter(price => price.symbol !== action.price.symbol)
      prices.push(action.price)
      return {...state, prices: prices}  

    case 'INCREASE_SHARES':
      let stocks = state.stocks.filter(stock => stock.id !== action.stock.id)
      stocks.push(action.stock)
      return {...state, stocks: stocks}

    case 'STOCK_ERRORS':
      return {...state, errors: action.errors}  

    case 'CLEAR_STOCK_ERRORS':
      return {...state, errors: []}  

    default:
     return state
  }
}  

export default stockReducer
