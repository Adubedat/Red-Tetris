import React from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import {
  StyledForm,
  StyledRegisterGroup,
  StyledHorizontalText
} from "./styles";

const LoginSub = ({ onSubmit, error, value, onChange, label }) => {
  return (
    <StyledForm onSubmit={e => onSubmit(e)}>
      <Button disabled={true} onClick={() => {}}>
        42 Connect
      </Button>
      <StyledHorizontalText>OR</StyledHorizontalText>
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
          Connect
        </Button>
      </StyledRegisterGroup>
    </StyledForm>
  );
};

LoginSub.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default LoginSub;