import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledForm,
  StyledRegisterGroup,
  StyledTextField,
  StyledButton
} from "./styles";
import inputError from "../../errors/inputError";

const CreateRoomSub = ({ playerName }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [roomName, setRoomName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    window.location.hash = roomName + "[" + playerName + "]";
  };

  const handleChange = e => {
    const value = e.target.value;
    setError(inputError(value));
    setRoomName(value);
  };

  useEffect(() => {
    document.getElementById("name").focus();
  });

  return (
    <StyledForm id="form" onSubmit={e => handleSubmit(e)}>
      <StyledRegisterGroup id="register">
        <StyledTextField
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          autoComplete="off"
          label="Insert room name"
          value={roomName}
          onChange={e => handleChange(e)}
        />
        <StyledButton id="enter" disabled={!roomName || error.boolean}>
          <p> Press Enter </p>
        </StyledButton>
      </StyledRegisterGroup>
    </StyledForm>
  );
};

CreateRoomSub.propTypes = {
  playerName: PropTypes.string.isRequired
};

export default CreateRoomSub;
