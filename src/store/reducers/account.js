const initialState = {
  id: 1,
  user_id: 1,
  amount: '1000',
}

export default function account (state = initialState, action) {
  switch (action.type) {
    case 'PUT_ACCOUNT_DATA': return action.payload
    default: return state
  }
}