import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledButton } from "./styles";

const GameInfoSub = ({ room, playerId, startGame }) => {
  const { playersCount, name: roomName, hostId } = room;
  const handleClick = () => {
    startGame();
  };

  return (
    <StyledContainer>
      <h2>{roomName}</h2>
      <p>[{playersCount}/10 Players]</p>
      {playerId === hostId ? (
        <StyledButton onClick={() => handleClick()}>start</StyledButton>
      ) : (
        <p>waiting for host to start</p>
      )}
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
