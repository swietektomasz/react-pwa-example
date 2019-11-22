import * as React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
import Login from './components/Login'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAppAuth = firebaseApp.auth()

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

const App = ({ signInWithGoogle, signOut, user }) => (
  <div className="App">
    <header className="App-header">
      {user ? <p>Hello, {user.displayName}</p> : <Login />}
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  </div>
)

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
