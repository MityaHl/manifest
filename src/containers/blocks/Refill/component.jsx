import React, { useState } from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styles from './styles'

const Refill = ({ state, addMoney }) => {
  const [sum, setSum] = useState(0)

  return (
    <div className={css(styles.toursList)}>
      <div className={css(styles.list)}>
        <Typography variant="h6">
          Пополнение счета
        </Typography>
        <TextField
          placeholder="Введите сумму"
          className={css(styles.textField)}
          label="Сумма"
          onChange={(e) => {
            setSum(e.target.value)
          }}
          variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          className={css(styles.textField)}
          onClick={() => {
            addMoney(sum)
          }}
        >
          Пополнить
        </Button>
      </div>
      <div className={css(styles.account)}>
        Остаток: {state.account.amount}$
      </div>
    </div>
  );
}

export default Refill
