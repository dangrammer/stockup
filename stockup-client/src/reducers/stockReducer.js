const initialState = {
  stocks: [],
  errors: []
}


const stockReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_PORTFOLIO':
      return {...state, stocks: action.stocks}  

    case 'ADD_STOCK':
      return {...state, stocks: [...state.stocks, action.stock]}

    case 'STOCK_ERRORS':
      return {...state, errors: action.errors}  

    case 'CLEAR_STOCK_ERRORS':
      return {...state, errors: []}  

    default:
     return state
  }
}  

export default stockReducer