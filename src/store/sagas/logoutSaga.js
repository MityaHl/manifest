import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putLoginData } from '../actions/login'

function onLogin (data) {
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
    yield put(putLoginData(''))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLogout () {
  yield takeEvery('LOGOUT', putData)
}
