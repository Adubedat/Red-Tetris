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

let HeaderSub = ({ player, room, onBackHome }) => {
  const { name: roomName } = room;
  const { name: playerName } = player;
  return (
    <StyledContainer>
      <StyledItemLeft>
        {roomName ? <Button onClick={onBackHome}>Back Home</Button> : ""}
      </StyledItemLeft>
      <StyledItemCenter>
        <StyledTitle data-text="Tetris Orange">Tetris Orange</StyledTitle>
      </StyledItemCenter>
      <StyledItemRight>
        {/* {playerName && (
          <StyledUserGroup>
            <p> {playerName}</p>
          </StyledUserGroup>
        )} */}
      </StyledItemRight>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  player: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired
};

export default HeaderSub;
