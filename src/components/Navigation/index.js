import React from 'react'
import { Link } from 'react-router-dom'

import LogoutButton from '../Logout'

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuthorized authUser={authUser} /> : <NavigationNotAuthorized />}</div>
)

const NavigationAuthorized = ({ authUser }) => (
  <div>
    <ul>
      <li>
        <Link to={'/home'}>Home</Link>
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
    <p>{authUser.email}</p>
  </div>
)

const NavigationNotAuthorized = () => (
  <div>
    <ul>
      <li>
        <Link to={'/login'}>Sign In</Link>
      </li>
      <li>
        <Link to={'/signup'}>Sign Up</Link>
      </li>
    </ul>
  </div>
)

export default Navigation
