import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledButton } from "./styles";

const GameInfoSub = ({ room, playerId, startGame }) => {
  const { playersCount, name: roomName, hostId, isStarted } = room;
  const handleClick = () => {
    startGame();
  };

  return (
    <StyledContainer>
      <h2>{roomName}</h2>
      <p>[{playersCount}/10 Players]</p>
      {playerId === hostId && !isStarted ? (
        <StyledButton onClick={() => handleClick()}>start</StyledButton>
      ) : null}
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
