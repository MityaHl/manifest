import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { getCharges } from '../actions/charges'
import { getAccount } from '../actions/account'

function onAddMoney(data) {
  return axios
    .put('............', data)
    .then(
      response => {
        return response.data
      }
    )
}

function * putData (action) {
  try {
    yield call(onAddMoney, action.payload)
    yield call(getAccount())
    yield call(getCharges())
  } catch (error) {
    console.log(error)
  }
}

export function * watchAddMoney () {
  yield takeEvery('ADD_MONEY', putData)
}
 