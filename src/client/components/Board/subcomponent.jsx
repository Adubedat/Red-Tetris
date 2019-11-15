import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledRow } from "./styles";
import BoardOverlay from "../BoardOverlay";
import Cell from "../Cell";

const BoardSub = ({
  board,
  hasLost,
  isGameOver,
  isStarted,
  isSpectre = false
}) => {
  return (
    <StyledContainer id="board" isSpectre={isSpectre}>
      {board.map((row, i) => (
        <StyledRow id="row" key={i}>
          {row.map((cell, i) => (
            <Cell key={i} color={cell} isSpectre={isSpectre} />
          ))}
        </StyledRow>
      ))}
      {!isSpectre && (hasLost || isGameOver || !isStarted) && <BoardOverlay />}
    </StyledContainer>
  );
};

BoardSub.propTypes = {
  board: PropTypes.array.isRequired,
  hasLost: PropTypes.bool,
  isGameOver: PropTypes.bool,
  isStarted: PropTypes.bool,
  isSpectre: PropTypes.bool
};

export default BoardSub;
