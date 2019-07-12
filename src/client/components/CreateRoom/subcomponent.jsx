import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledForm,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
  StyledButton
} from "./styles";
import inputError from "../../errors/inputError";

const CreateRoomSub = ({ playerName }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [roomName, setRoomName] = useState("");

  const onSubmit = e => {
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
    <StyledForm id="form" onSubmit={e => onSubmit(e)}>
      <StyledLabel htmlFor="name">{"Insert room name"}</StyledLabel>
      <StyledInputContainer id="input-container">
        <StyledInput
          type="text"
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          autoComplete="off"
          label="Insert room name"
          value={roomName}
          onChange={e => handleChange(e)}
        />
      </StyledInputContainer>
      {/* <StyledTextField
            id="name"
            error={error.boolean}
            helperText={error.message}
            spellCheck="false"
            autoComplete="off"
            label={label}
            value={value}
            onChange={e => onChange(e)}
          /> */}
      <StyledButton id="enter" disabled={!roomName || error.boolean}>
        <p> Press Enter </p>
      </StyledButton>
    </StyledForm>
  );
};

CreateRoomSub.propTypes = {
  playerName: PropTypes.string.isRequired
};

export default CreateRoomSub;
