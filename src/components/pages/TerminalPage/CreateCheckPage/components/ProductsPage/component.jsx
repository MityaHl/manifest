import React from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'

import OneListItem from './components/OneListItem'

import styles from './styles'

const ProductsPage = () => {
  return (
    <div className={css(styles.productPage)}>
      <Typography
        variant="h5"
        className={css(styles.productsTitle)}
      >
        Все товары
      </Typography>
      <OneListItem />
    </div>
  )
}

export default ProductsPage
