import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledColumn } from "./styles";
import Cell from "../Cell";

const BoardSub = ({ board, isSpectre = false }) => {
  return (
    <StyledContainer isSpectre={isSpectre}>
      {board.map((column, i) => (
        <StyledColumn key={i++}>
          {column.map((cell, i) => (
            <Cell key={i++} color={cell} isSpectre={isSpectre} />
          ))}
        </StyledColumn>
      ))}
    </StyledContainer>
  );
};

BoardSub.propTypes = {
  board: PropTypes.array.isRequired,
  isSpectre: PropTypes.bool
};

export default BoardSub;
