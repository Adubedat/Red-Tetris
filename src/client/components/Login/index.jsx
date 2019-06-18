import React, { useState } from "react";
import { connect } from "react-redux";
import { newPlayer } from "../../actions/player";
import LoginSub from "./subcomponent";
import loginError from "../../errors/loginError";

let Login = ({ newPlayer }) => {
  const [error, setError] = useState("");
  const [playerName, setplayerName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!error) newPlayer(playerName);
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

const actionCreators = { newPlayer };

Login = connect(
  null,
  actionCreators
)(Login);

export default Login;
