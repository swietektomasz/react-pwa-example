import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { withFirebase } from './components/Firebase'
import Login from './components/Login'
import Navigation from './components/Navigation'
import MainView from './containers/main'
import SignUp from './components/SignUp'
import { client } from './client'

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
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navigation authUser={authUser} />
        <Route exact path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/home' component={MainView} />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default withFirebase(App)
