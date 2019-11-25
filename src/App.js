import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { AbilityProvider } from 'react-ability'

import { withFirebase } from './components/Firebase'
import Login from './components/Login'
import Navigation from './components/Navigation'
import MainView from './containers/main'
import SignUp from './components/SignUp'
import { client } from './client'

const definition = {
  permissions: [
    {
      name: 'SEARCH',
      roles: ['PREMIUM_USER']
    }
  ]
}

const App = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null)
  const [role, setRole] = useState(['PREMIUM_USER'])

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
      <AbilityProvider definition={definition} roles={role}>
        <BrowserRouter>
          <Navigation
            authUser={authUser}
            changeRole={() => (role[0] === 'USER' ? setRole(['PREMIUM_USER']) : setRole(['USER']))}
          />
          <Route exact path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/home' component={MainView} />
        </BrowserRouter>
      </AbilityProvider>
    </ApolloProvider>
  )
}

export default withFirebase(App)
