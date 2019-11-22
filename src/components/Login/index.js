import React from 'react'
import './login.css'

const Login = ({ signInWithGoogle }) => (
  <div className='login-page'>
    <div className='login-card'>
      <p>Hello! Please sign in to enter the page.</p>
      <button className='login-button' onClick={signInWithGoogle}>
        Sign in using Google
      </button>
    </div>
  </div>
)

export default Login
