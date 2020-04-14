import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'

import BankList from '../BankList'
import Refill from '../Refill'

import styles from './styles'

const MainPage = ({
  state,
  onGetAccount,
  onGetCharges,
  onAddMoney,
  onPaidForCharge,
}) => {
  useEffect(() => {
    onGetAccount()
    onGetCharges()
  }, [])

  if (!state.loginData.token) {
    return (
      <Redirect to="/mainpage" />
    )
  }

  return (
    <Grid
      container
      className={css(styles.mainPage)}>
      <Grid
        item
        xs={3}
      >
        <Refill state={state} addMoney={onAddMoney}/>
      </Grid>
      <Grid
        item
        xs={9}
      >
        <BankList state={state} onPaidForCharge={onPaidForCharge}/>
      </Grid>
    </Grid>
  );
}

export default MainPage
