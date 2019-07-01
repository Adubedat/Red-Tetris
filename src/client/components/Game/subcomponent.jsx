import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import { StyledContainer } from "./styles";

const GameSub = ({ room }) => {
  const { playersCount } = room;
  return (
    <StyledContainer>
      <div>
        <p>[{playersCount}/10 Players]</p>
      </div>
      <Board />
      <div>
        <p>notboard</p>
      </div>
    </StyledContainer>
  );
};

GameSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameSub;
