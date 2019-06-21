import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { StyledContainer, StyledUserGroup } from "./styles";

let HeaderSub = ({
  appName,
  playerName,
  roomName,
  onClickLogout,
  onClickBackHome,
  showBackHome
}) => {
  return (
    <StyledContainer>
      {showBackHome ? (
        <Button onClick={onClickBackHome}>Back Home</Button>
      ) : (
        <p>{appName}</p>
      )}
      <p>{roomName}</p>
      <StyledUserGroup>
        <p>{playerName}</p>
        {playerName && <Button onClick={onClickLogout}>Logout</Button>}
      </StyledUserGroup>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  appName: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  onClickLogout: PropTypes.func.isRequired
};

export default HeaderSub;
