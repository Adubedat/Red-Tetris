import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { StyledContainer, StyledUserGroup } from "./styles";

let HeaderSub = ({ appName, playerName, onClick }) => {
  return (
    <StyledContainer>
      <p>{appName}</p>
      <StyledUserGroup>
        <p>{playerName}</p>
        {playerName && <Button onClick={onClick}>Logout</Button>}
      </StyledUserGroup>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  appName: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeaderSub;
