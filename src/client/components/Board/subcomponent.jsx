import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";
import Cell from "../Cell";

const BoardSub = ({ players, playerId }) => {
  const player = players.filter(player => player.id === playerId);
  if (player && player.board) {
    const board = player.board;
    return (
      <StyledContainer>
        {board.map((cell, i) => (
          <Cell key={i++} color={cell} />
        ))}
      </StyledContainer>
    );
  } else return null;
};

BoardSub.propTypes = {
  room: PropTypes.object,
  player: PropTypes.object
};

export default BoardSub;
