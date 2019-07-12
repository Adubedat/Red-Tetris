import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  StyledForm,
  StyledRegisterGroup,
  StyledTextField,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
  StyledButton
} from "./styles";

const CreateRoomSub = ({ onSubmit, onChange, error, value, label }) => {
  useEffect(() => {
    document.getElementById("name").focus();
  });
  return (
    <StyledForm id="form" onSubmit={e => onSubmit(e)}>
      <StyledLabel htmlFor="name">{label}</StyledLabel>
      <StyledInputContainer id="input-container">
        <StyledInput
          type="text"
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          autoComplete="off"
          label={label}
          value={value}
          onChange={e => onChange(e)}
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
      <StyledButton id="enter" disabled={!value || error.boolean}>
        <p> Press Enter </p>
      </StyledButton>
    </StyledForm>
  );
};

CreateRoomSub.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CreateRoomSub;
