import React, { useState } from "react";
import { connect } from "react-redux";
import { connectPlayer } from "../../actions/actions";
import LoginSub from "./subcomponent";
import loginError from "../../errors/loginError";

let Login = ({ connectPlayer }) => {
  const [error, setError] = useState("");
  const [playerName, setplayerName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!error) connectPlayer(playerName);
  };

  const handleChange = e => {
    const value = e.target.value;
    setError(loginError(value));
    setplayerName(value);
  };

  return (
    <LoginSub
      onSubmit={handleSubmit}
      error={error}
      playerName={playerName}
      onChange={handleChange}
    />
  );
};

const actionCreators = { connectPlayer };

Login = connect(
  null,
  actionCreators
)(Login);

export default Login;
