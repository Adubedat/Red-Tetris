import React from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import { StyledForm, StyledRegisterGroup } from "./styles";

const CreateRoomSub = ({ onSubmit, onChange, error, value, label }) => {
  return (
    <StyledForm onSubmit={e => onSubmit(e)}>
      <p>Create a new room to play with your friends (if you have any ...)</p>
      <StyledRegisterGroup>
        <Input
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
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
