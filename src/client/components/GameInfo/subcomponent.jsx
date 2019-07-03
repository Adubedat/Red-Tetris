import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

const GameInfoSub = ({ room, player }) => {
  const { playersCount, name: roomName } = room;
  return (
    <StyledContainer>
      <h2>{roomName}</h2>
      <p>[{playersCount}/10 Players]</p>
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
