import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { withFirebase } from './components/Firebase'
import Login from './components/Login'
import Navigation from './components/Navigation'
import MainView from './containers/main'
import SignUp from './components/SignUp'

const App = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null)

  const listener = () => {
    firebase.auth.onAuthStateChanged(auth => {
      auth ? setAuthUser(auth) : setAuthUser(null)
    })
  }

  useEffect(() => {
    listener()
    return listener()
  })

  return (
    <BrowserRouter>
      <Navigation authUser={authUser} />
      <hr />
      <Route exact path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/home' component={MainView} />
    </BrowserRouter>
  )
}

export default withFirebase(App)
