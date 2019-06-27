import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import { StyledForm, StyledHorizontalText } from "./styles";
import inputError from "../../errors/inputError";

const LoginSub = ({ connectPlayer }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!error.boolean) connectPlayer(playerName);
  };

  const handleChange = e => {
    setPlayerName(e.target.value);
    setError(inputError(e.target.value));
  };

  return (
    <StyledForm onSubmit={e => handleSubmit(e)}>
      <h1>Tetris Orange</h1>
      <Button disabled={true} fullWidth>
        42 Connect
      </Button>
      <StyledHorizontalText>OR</StyledHorizontalText>
      <Input
        error={error.boolean}
        helperText={error.message}
        spellCheck="false"
        label="Name"
        value={playerName}
        onChange={e => handleChange(e)}
        fullWidth
      />
      <Button disabled={!playerName || error.boolean} type="submit" fullWidth>
        Connect
      </Button>
    </StyledForm>
  );
};

LoginSub.propTypes = {
  connectPlayer: PropTypes.func.isRequired
};

export default LoginSub;
