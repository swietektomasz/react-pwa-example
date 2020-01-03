import React from "react";
import { Link } from "react-router-dom";

import LogoutButton from "../Logout";

import "./navigation.css";

const Navigation = ({ authUser }) => (
  <div className="nav-bar">
    {authUser ? (
      <NavigationAuthorized authUser={authUser} />
    ) : (
      <NavigationNotAuthorized />
    )}
  </div>
);

const NavigationAuthorized = ({ authUser }) => (
  <div>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to={"/home"}>
          Anime List
        </Link>
      </li>
      <li className="sign-out">
        <span className="logged-in">{authUser.email}</span>
        <LogoutButton />
      </li>
    </ul>
  </div>
);

const NavigationNotAuthorized = () => (
  <div>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to={"/login"}>
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/signup"}>
          Sign Up
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
