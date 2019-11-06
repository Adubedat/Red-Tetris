import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledRow,
  StyledGameOverContainer,
  StyledGameOverText
} from "./styles";
import Cell from "../Cell";

const BoardSub = ({ board, isGameOver, isSpectre = false }) => {
  return (
    <StyledContainer id="board" isSpectre={isSpectre}>
      {!isSpectre && isGameOver && (
        <StyledGameOverContainer id="gameover-overlay">
          <StyledGameOverText>game over</StyledGameOverText>
        </StyledGameOverContainer>
      )}
      {board.map((row, i) => (
        <StyledRow id="row" key={i}>
          {row.map((cell, i) => (
            <Cell key={i} color={cell} isSpectre={isSpectre} />
          ))}
        </StyledRow>
      ))}
    </StyledContainer>
  );
};

BoardSub.propTypes = {
  board: PropTypes.array.isRequired,
  isSpectre: PropTypes.bool
};

export default BoardSub;
