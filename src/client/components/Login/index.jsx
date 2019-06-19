import React, { useState } from "react";
import { connect } from "react-redux";
import { newPlayer } from "../../actions/player";
import LoginSub from "./subcomponent";
import inputError from "../../errors/inputError";

let Login = ({ newPlayer }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [playerName, setplayerName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!error.boolean) newPlayer(playerName);
  };

  const handleChange = e => {
    const value = e.target.value;
    setError(inputError(value));
    setplayerName(value);
  };

  return (
    <LoginSub
      onSubmit={handleSubmit}
      error={error}
      value={playerName}
      label="Name"
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
