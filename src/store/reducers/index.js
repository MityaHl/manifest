import { combineReducers } from 'redux'
import account from './account'
import loginData from './login'
import charges from './charges'
import payment from './payment'

export default combineReducers({
  account,
  loginData,
  charges,
  payment,
})