import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import transactionReducer from './transactionReducer'

const rootReducer = combineReducers({
  currentUserReducer: currentUserReducer,
  transactionReducer: transactionReducer
})

export default rootReducer