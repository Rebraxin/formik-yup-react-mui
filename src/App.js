import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.scss'
import Header from './components/Header.js'
import Home from './screens/Home'
import Login from './screens/Login'
import Notfound from './screens/Notfound'
import Registration from './screens/Registration'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
