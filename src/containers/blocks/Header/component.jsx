import React, { useState } from 'react'
import { css } from 'aphrodite'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null)

  const openHeaderMenu = event => {
    setOpenMenu(event.currentTarget)
  }

  const closeHeaderMenu = () => {
    setOpenMenu(null)
  }

  return (
    <div className={css(styles.header)}>
      <Container
        maxWidth="lg"
        className={css(styles.container)}>
         <Grid
          container
          className={css(styles.mainPage)}>
          <Grid
            item
            xs={11}
            container
            justifyContent="flex-start"
          >
            <Typography
              variant="h6"
              className={css(styles.title)}>
              Банк
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
          >
            <Button
              onClick={openHeaderMenu}
              className={css(styles.headerButton)}
              variant="contained"
              color="primary"
            >
              Иван
            </Button>
            <Menu
              anchorEl={openMenu}
              open={Boolean(openMenu)}
              onClose={closeHeaderMenu}
            >
              <MenuItem onClick={closeHeaderMenu}>Выйти</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header
