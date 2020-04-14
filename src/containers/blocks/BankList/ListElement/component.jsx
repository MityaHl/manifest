import React from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import styles from './styles'

const ListElement = ({ charge, onPaidForCharge }) => {
  return (
    <div className={css(styles.listItem)}>
      <Grid container>
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-start"
        >
          <Typography className={css(styles.chargeName)}>
            {charge.description}
          </Typography>
        </Grid>
        <Grid item xs={4} className={css(styles.cost)}>
          {charge.charge}
        </Grid>
        <Grid item xs={2} className={css(styles.paidStatus)}>
          {
            charge.is_paid ? (
              <Typography className={css(styles.paid)}>
                Оплачено
              </Typography>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  onPaidForCharge(charge.id)
                }}
              >
                Оплатить
              </Button>
            )
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default ListElement
