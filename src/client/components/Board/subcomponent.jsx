import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledRow } from "./styles";
import Cell from "../Cell";

const BoardSub = ({ board, isSpectre = false }) => {
  return (
    <StyledContainer isSpectre={isSpectre}>
      {board.map((row, i) => (
        <StyledRow key={i}>
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
