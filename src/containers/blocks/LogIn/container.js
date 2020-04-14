import { connect } from 'react-redux'

import { login } from '../../../store/actions/login'
import LogIn from './component'

const mapStateToProps = state => ({
  token: state.loginData.token,
})

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(login(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
