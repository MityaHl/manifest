import React, { useCallback } from 'react'
import { css } from 'aphrodite'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const LogIn = ({ onLogin, token }) => {

  if (token) {
    return (
      <Redirect to="/mainpage" />
    )
  }

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
    >
      {({
        values,
      }) => (
        <Form>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={css(styles.formGrid)}
            >
              <Typography variant="h5" component="h2">
                Вход в банк
              </Typography>
              <Field
                component={TextField}
                label="Логин"
                name="login"
                variant="outlined"
                className={css(styles.field)} />
              <Field
                component={TextField}
                label="Пароль"
                name="password"
                type="password"
                variant="outlined"
                className={css(styles.field)} />
              <Button
                variant="contained"
                color="primary"
                className={css(styles.field)}
                onClick={() => {
                  onLogin(values)
                }}
              >
                Войти в банк
              </Button>
            </Grid>
          }
        </Form>
      )}
    </Formik>
  )
}

export default LogIn
