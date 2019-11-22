import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={'/login'}>Sign In</Link>
      </li>
      <li>
        <Link to={'/home'}>Home</Link>
      </li>
    </ul>
  </div>
)

export default Navigation
