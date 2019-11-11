import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledForm,
  StyledRoomNameContainer,
  StyledLabel,
  StyledButton,
  StyledInput
} from "./styles";
import inputError from "../../errors/inputError";

const CreateRoomSub = ({ playerName }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [roomName, setRoomName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    window.location.hash = roomName + "[" + playerName + "]";
  };

  const handleRoomNameChange = e => {
    const value = e.target.value;
    setError(inputError(value));
    setRoomName(value);
  };

  useEffect(() => {
    document.getElementById("name").focus();
  });

  return (
    <StyledForm id="form" onSubmit={e => handleSubmit(e)}>
      <StyledRoomNameContainer>
        <StyledLabel htmlFor="name">Create Room</StyledLabel>
        <StyledInput
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          autoComplete="off"
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <StyledButton id="enter" disabled={!roomName || error.boolean}>
          <p>Press Enter</p>
        </StyledButton>
      </StyledRoomNameContainer>
    </StyledForm>
  );
};

CreateRoomSub.propTypes = {
  playerName: PropTypes.string.isRequired
};

export default CreateRoomSub;
