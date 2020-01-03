import React, { useState } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase/context";

import "./login.css";

const initialState = {
  email: "",
  password: "",
  error: null
};

const Login = ({ firebase: { doSignInWithEmailAndPassword }, history }) => {
  const [user, setUser] = useState(initialState);

  const isValid = user.email === "" || user.password === "";

  const signIn = event => {
    doSignInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        setUser(initialState);
        history.push("/home");
      })
      .catch(error => {
        setUser({ ...user, error: error });
      });

    event.preventDefault();
  };

  const handleEnterPress = event => {
    event.preventDefault();
    if (event.key === "Enter") {
      signIn(event);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <p>Hello! Please sign in to enter the page.</p>
        <input
          name="username"
          value={user.username}
          onChange={event => setUser({ ...user, email: event.target.value })}
          type="text"
          placeholder="Email"
          onKeyPress={handleEnterPress}
        />
        <input
          name="email"
          value={user.password}
          onChange={event => setUser({ ...user, password: event.target.value })}
          type="text"
          placeholder="Password"
          onKeyPress={handleEnterPress}
        />
        <button disabled={isValid} className="login-button" onClick={signIn}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default compose(withRouter, withFirebase)(Login);
