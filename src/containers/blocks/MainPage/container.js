import { connect } from 'react-redux'

import { getAccount } from '../../../store/actions/account'
import { getCharges } from '../../../store/actions/charges'
import { addMoney, paidForCharge } from '../../../store/actions/payment'
import MainPage from './component'

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
  onGetAccount: () => dispatch(getAccount()),
  onGetCharges: () => dispatch(getCharges()),
  onAddMoney: (data) => dispatch(addMoney(data)),
  onPaidForCharge: (data) => dispatch(paidForCharge(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
