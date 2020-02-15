import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'

const rootReducer = combineReducers({
  currentUserReducer: currentUserReducer
})

export default rootReducer