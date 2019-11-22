import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import Navigation from './components/Navigation'
import MainView from './containers/main'

const App = () => (
  <BrowserRouter>
    <Navigation />
    <hr />
    <Route exact path='/login' component={Login} />
    <Route path='/home' component={MainView} />
  </BrowserRouter>
)

export default App
