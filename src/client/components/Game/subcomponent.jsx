import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import { StyledContainer } from "./styles";
import Spectre from "../Spectre";

const GameSub = ({ room, otherPlayers }) => {
  const { playersCount } = room;
  console.log(otherPlayers);
  return (
    <StyledContainer>
      <div>
        <p>[{playersCount}/10 Players]</p>
      </div>
      <Board />
      {playersCount > 1 ? <Spectre player={otherPlayers[0]} /> : <div>yo</div>}
    </StyledContainer>
  );
};

GameSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameSub;
