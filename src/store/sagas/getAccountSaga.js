import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putAccountData } from '../actions/account'

function onGetAccount (data) {
  return axios
    .post('............', data)
    .then(
      response => {
        return response.data
      }
    )
}

function * putData () {
  try {
    const data = yield call(onGetAccount)
    yield put(putAccountData(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchAccount () {
  yield takeEvery('GET_ACCOUNT', putData)
}
 