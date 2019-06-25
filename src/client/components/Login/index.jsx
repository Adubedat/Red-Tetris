import React, { useState } from "react";
import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import LoginSub from "./subcomponent";
import inputError from "../../errors/inputError";

let Login = ({ connectPlayer }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [playerName, setplayerName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!error.boolean) connectPlayer(playerName);
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

const actionCreators = { connectPlayer };

Login = connect(
  null,
  actionCreators
)(Login);

export default Login;
