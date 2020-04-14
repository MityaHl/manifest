export const getAccount = () => ({
  type: 'GET_ACCOUNT',
})

export const putAccountData = (data) => ({
  type: 'PUT_ACCOUNT_DATA',
  payload: data,
})

