const initialState = [{
  description: 'Ресторан',
  charge: '1000',
  is_paid: false,
  id: 1,
}]

export default function charges (state = initialState, action) {
  switch (action.type) {
    case 'PUT_CHARGES_DATA': return action.payload
    default: return state
  }
}