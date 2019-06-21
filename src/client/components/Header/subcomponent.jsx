import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { StyledContainer, StyledUserGroup } from "./styles";

let HeaderSub = ({
  playerName,
  roomName,
  handleLogout,
  handleBackHome,
  showBackHome
}) => {
  return (
    <StyledContainer>
      {showBackHome ? (
        <Button onClick={handleBackHome}>Back Home</Button>
      ) : (
        <p>Tetris Rouge</p>
      )}
      <p>{roomName}</p>
      <StyledUserGroup>
        <p>{playerName}</p>
        {playerName && <Button onClick={handleLogout}>Logout</Button>}
      </StyledUserGroup>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  playerName: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleBackHome: PropTypes.func.isRequired,
  showBackHome: PropTypes.bool.isRequired
};

export default HeaderSub;
