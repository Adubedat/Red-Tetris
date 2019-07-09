import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { StyledForm, StyledRegisterGroup, StyledTextField } from "./styles";

const CreateRoomSub = ({ onSubmit, onChange, error, value, label }) => {
  useEffect(() => {
    document.getElementById("name").focus();
  });
  return (
    <StyledForm onSubmit={e => onSubmit(e)}>
      <StyledRegisterGroup>
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
        <Button disabled={!value || error.boolean} type="submit">
          Create
        </Button>
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
