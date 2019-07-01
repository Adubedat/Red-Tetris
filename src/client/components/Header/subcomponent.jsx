import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import {
  StyledContainer,
  StyledUserGroup,
  StyledTitle,
  StyledItemLeft,
  StyledItemCenter,
  StyledItemRight
} from "./styles";

let HeaderSub = ({ playerName, room, onLogout, onBackHome, showBackHome }) => {
  const { name: roomName } = room;
  return (
    <StyledContainer>
      <StyledItemLeft>
        {roomName ? (
          <Button onClick={onBackHome}>Back Home</Button>
        ) : (
          <StyledTitle>Tetris Orange</StyledTitle>
        )}
      </StyledItemLeft>
      <StyledItemCenter>
        <StyledTitle>{roomName}</StyledTitle>
      </StyledItemCenter>
      <StyledItemRight>
        <StyledUserGroup>
          <p>{playerName}</p>
          {playerName && (
            <Button style={{ marginLeft: 20 }} onClick={onLogout}>
              Logout
            </Button>
          )}
        </StyledUserGroup>
      </StyledItemRight>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  playerName: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired
};

export default HeaderSub;
