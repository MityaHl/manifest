import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putChargesData } from '../actions/charges'

function onGetCharges (data) {
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
    const data = yield call(onGetCharges)
    yield put(putChargesData(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchCharges () {
  yield takeEvery('GET_CHARGES', putData)
}
 