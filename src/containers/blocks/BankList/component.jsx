import React from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import ListElement from './ListElement'

import styles from './styles'

const BankList = ({ state,  onPaidForCharge}) => {
  return (
    <div className={css(styles.restList)}>
      <Typography variant="h6" className={css(styles.title)}>
        Оплата броней
      </Typography>
      <div className={css(styles.list)}>
        {
          state.charges.map((charge) => (
            <ListElement charge={charge} onPaidForCharge={onPaidForCharge}/>
          ))
        }
      </div>
    </div>
  );
}

export default BankList
