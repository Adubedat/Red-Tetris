import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  StyledForm,
  StyledRegisterGroup,
  StyledTextField,
  StyledButton
} from "./styles";

const CreateRoomSub = ({ onSubmit, onChange, error, value, label }) => {
  useEffect(() => {
    document.getElementById("name").focus();
  });
  return (
    <StyledForm id="form" onSubmit={e => onSubmit(e)}>
      <StyledRegisterGroup id="register">
        <StyledTextField
          id="name"
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          autoComplete="off"
          label={label}
          value={value}
          onChange={e => onChange(e)}
        />
        <StyledButton id="enter" disabled={!value || error.boolean}>
          <p> Press Enter </p>
        </StyledButton>
      </StyledRegisterGroup>
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
