import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledButton } from "./styles";

const GameInfoSub = ({ room, startGame, isHost }) => {
  const { playersCount, name: roomName, isStarted } = room;
  const handleClick = () => {
    startGame();
  };

  return (
    <StyledContainer id="game-info">
      <h2>{roomName}</h2>
      <p>[{playersCount}/10 Players]</p>
      {isHost && !isStarted ? (
        <StyledButton onClick={() => handleClick()}>start</StyledButton>
      ) : null}
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
