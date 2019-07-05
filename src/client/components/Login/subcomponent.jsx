import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import { StyledForm, StyledButton } from "./styles";
import inputError from "../../errors/inputError";
import Cell from "../Cell";

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
    <StyledForm onSubmit={e => handleSubmit(e)}>
      <Input
        id="name"
        error={error.boolean}
        helperText={error.message}
        spellCheck="false"
        label="Name"
        value={playerName}
        onChange={e => handleChange(e)}
      />
      {/* <StyledHorizontalText></StyledHorizontalText> */}
      <StyledButton disabled={!playerName || error.boolean} type="submit">
        <Cell color="blue"></Cell>
        <Cell color="blue"></Cell>
        <Cell color="blue"></Cell>
        <Cell color="blue"></Cell>
      </StyledButton>
    </StyledForm>
  );
};

LoginSub.propTypes = {
  connectPlayer: PropTypes.func.isRequired
};

export default LoginSub;
