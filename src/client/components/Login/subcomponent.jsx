import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledForm, StyledTextField } from "./styles";
import inputError from "../../errors/inputError";
import TetriButton from "../common/TetriButton";

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

  useEffect(() => {
    document.getElementById("name").focus();
  });

  return (
    <StyledContainer>
      <StyledForm onSubmit={e => handleSubmit(e)}>
        <StyledTextField
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          label="Enter your name..."
          autoComplete="off"
          value={playerName}
          onChange={e => handleChange(e)}
        />
        <TetriButton disabled={!playerName || error.boolean} />
      </StyledForm>
    </StyledContainer>
  );
};

LoginSub.propTypes = {
  connectPlayer: PropTypes.func.isRequired
};

export default LoginSub;
