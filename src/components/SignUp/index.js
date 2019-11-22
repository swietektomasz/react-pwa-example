import React, { useState } from 'react'
import { withFirebase } from '../Firebase/context'

const initialState = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const SignUp = ({ firebase: { doCreateUserWithEmailAndPassword } }) => {
  const [login, setLogin] = useState(initialState)

  const onSubmit = event => {
    doCreateUserWithEmailAndPassword(login.email, login.passwordOne)
      .then(authUser => {
        setLogin(initialState)
      })
      .catch(error => {
        setLogin(info => ({ ...info, error: error }))
      })

    event.preventDefault()
  }

  const isInvalid =
    login.passwordOne !== login.passwordTwo ||
    login.passwordOne === '' ||
    login.email === '' ||
    login.username === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name='username'
        value={login.username}
        onChange={event => setLogin({ ...login, username: event.target.value })}
        type='text'
        placeholder='Full Name'
      />
      <input
        name='email'
        value={login.email}
        onChange={event => setLogin({ ...login, email: event.target.value })}
        type='text'
        placeholder='Email Address'
      />
      <input
        name='passwordOne'
        value={login.passwordOne}
        onChange={event => setLogin({ ...login, passwordOne: event.target.value })}
        type='password'
        placeholder='Password'
      />
      <input
        name='passwordTwo'
        value={login.passwordTwo}
        onChange={event => setLogin({ ...login, passwordTwo: event.target.value })}
        type='password'
        placeholder='Confirm Password'
      />
      <button disabled={isInvalid} type='submit'>
        Sign Up
      </button>
      {login.error && <p>{login.error.message}</p>}
    </form>
  )
}

export default withFirebase(SignUp)
