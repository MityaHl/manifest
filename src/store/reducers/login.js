export default function loginData (state = '', action) {
  switch (action.type) {
    case 'PUT_LOGIN_DATA': return action.payload
    default: return state
  }
}