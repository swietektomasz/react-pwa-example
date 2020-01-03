import React from "react";

import { withFirebase } from "../Firebase";

import "./logout.css";

const LogoutButton = ({ firebase }) => (
  <button className="logout-button" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(LogoutButton);
