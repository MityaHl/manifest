import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './containers/blocks/Header'
import LogIn from './containers/blocks/LogIn'
import MainPage from './containers/blocks/MainPage'

import './App.css'

function App({ state }) {
  return (
    <BrowserRouter>
      <Switch>
        {
          state.loginData.token ? (
            <>
              <Header />
              <Route path="/mainpage" component={MainPage} />
              <Route path="/" exact component={LogIn} />
            </>
          ) : (
            <Route path="/" exact component={LogIn} />
          )
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App;
