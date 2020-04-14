import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putLoginData } from '../actions/login'

function onLogin (data) {
  return axios
    .post('http://127.0.0.1/soa/service1/users', {
      login: 'root',
      password: 'root',
      name: 'root',
    })
    .then(
      response => {
        axios.defaults.headers.common['Authorization'] = response.data.token;
        return response.data
      }
    )
}

function * putData (action) {
  try {
    const data = yield call(onLogin, action.payload)
    yield put(putLoginData({token: 'aaa'}))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLogin () {
  yield takeEvery('LOGIN', putData)
}
