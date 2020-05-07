import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'

import SelectedProducts from './components/SelectedProducts'
import ProductsPage from './components/ProductsPage'

import styles from './styles'

const CreateCheckPage = () => {
  return (
    <Grid
      container
      className={css(styles.createCheck)}
    >
      <Grid item xs={4}>
        <SelectedProducts />
      </Grid>
      <Grid item xs={8}>
        <ProductsPage />
      </Grid>
    </Grid>
  )
}

export default CreateCheckPage
