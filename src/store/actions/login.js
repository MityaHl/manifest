export const login = data => ({
  type: 'LOGIN',
  payload: data,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const putLoginData = data => ({
  type: 'PUT_LOGIN_DATA',
  payload: data,
})
