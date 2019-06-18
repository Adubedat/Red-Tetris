import React from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import {
  StyledForm,
  StyledRegisterGroup,
  StyledHorizontalText
} from "./styles";

const LoginSub = ({ onSubmit, error, playerName, onChange }) => {
  return (
    <StyledForm onSubmit={e => onSubmit(e)}>
      <Button disabled={true} onClick={() => {}}>
        42 Connect
      </Button>
      <StyledHorizontalText>OR</StyledHorizontalText>
      <StyledRegisterGroup>
        <Input
          error={error ? true : false}
          helperText={error}
          spellCheck="false"
          label="Name"
          value={playerName}
          onChange={e => onChange(e)}
        />
        <Button disabled={!playerName || error ? true : false} type="submit">
          Connect
        </Button>
      </StyledRegisterGroup>
    </StyledForm>
  );
};

LoginSub.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired
};

export default LoginSub;
