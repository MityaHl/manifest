import { all } from 'redux-saga/effects'

import { watchLogin } from './loginSaga'
import { watchAddMoney } from './addMoneySaga'
import { watchAccount } from './getAccountSaga'
import { watchCharges } from './getChargesData'
import { watchPaid } from './paidSaga'

export default function * rootSaga () {
  yield all([
    watchLogin(),
    watchAddMoney(),
    watchAccount(),
    watchPaid(),
    watchCharges(),
  ])
}