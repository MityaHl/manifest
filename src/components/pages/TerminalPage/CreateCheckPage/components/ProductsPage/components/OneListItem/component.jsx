import React from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const OneListItem = () => {
  return (
    <div className={css(styles.oneProductCategory)}>
      <img
        className={css(styles.image)}
        src="https://static.tildacdn.com/tild6630-6237-4432-b238-363337633061/-5.jpg"
        alt="" />
      <div className={css(styles.categoryTitle)}>
        Розы
      </div>
    </div>
  )
}

export default OneListItem
