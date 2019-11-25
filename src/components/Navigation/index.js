import React from 'react'
import { Link } from 'react-router-dom'

import LogoutButton from '../Logout'

import './navigation.css'

const Navigation = ({ authUser, changeRole }) => (
  <div className='nav-bar'>
    {authUser ? (
      <NavigationAuthorized changeRole={changeRole} authUser={authUser} />
    ) : (
      <NavigationNotAuthorized />
    )}
  </div>
)

const NavigationAuthorized = ({ authUser, changeRole }) => (
  <div>
    <ul className='nav-list'>
      <li className='nav-item'>
        <Link className='nav-link' to={'/home'}>
          Home
        </Link>
      </li>
      <li className='sign-out'>
        <button onClick={changeRole}>Change role</button>
        <span className='logged-in'>Logged in as: {authUser.email}</span>
        <LogoutButton />
      </li>
    </ul>
  </div>
)

const NavigationNotAuthorized = () => (
  <div>
    <ul className='nav-list'>
      <li className='nav-item'>
        <Link className='nav-link' to={'/login'}>
          Sign In
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={'/signup'}>
          Sign Up
        </Link>
      </li>
    </ul>
  </div>
)

export default Navigation
