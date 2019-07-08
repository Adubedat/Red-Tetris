import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import {
  StyledTetriminos,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledButton
} from "./styles";
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
    <StyledContainer>
      <StyledForm onSubmit={e => handleSubmit(e)}>
        <Input
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          label="Enter your name..."
          autoComplete="off"
          value={playerName}
          onChange={e => handleChange(e)}
        />
        {/* <StyledHorizontalText></StyledHorizontalText> */}
        <StyledButton disabled={!playerName || error.boolean} type="submit">
          <StyledTetriminos>
            <Cell color="#14d4dc" letter="P"></Cell>
            <Cell color="#dc143c" letter="L"></Cell>
            <Cell color="#ff8b00" letter="A"></Cell>
            <Cell color="#3cdc14" letter="Y"></Cell>
          </StyledTetriminos>
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

LoginSub.propTypes = {
  connectPlayer: PropTypes.func.isRequired
};

export default LoginSub;
