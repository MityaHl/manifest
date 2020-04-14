import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { getCharges } from '../actions/charges'
import { getAccount } from '../actions/account'

function onPaid (data) {
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
    yield call(onPaid, action.payload)
    yield getAccount()
    yield getCharges()
  } catch (error) {
    console.log(error)
  }
}

export function * watchPaid () {
  yield takeEvery('PAID_FOR_CHARGES', putData)
}
 