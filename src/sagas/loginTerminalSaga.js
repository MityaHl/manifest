import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putLoginTerminalData } from '../store/actions/loginTerminal'

function onLoginTerminal (data) {
  return axios
    .post('https://flowers-manager-api.herokuapp.com/api/terminal/auth/login', {
      floristPassword: '0000',
      terminalLogin: 'test',
      terminalPassword: 'test',
    })
    .then(
      response => {
        axios.defaults.headers.common['AuthTerm'] = response.data.token
        return response.data
      }
    )
}

function * putData (action) {
  try {
    const terminalData = yield call(onLoginTerminal, action.payload)
    yield put(putLoginTerminalData(terminalData))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoginTerminal () {
  yield takeEvery('LOGIN_TERMINAL', putData)
}
