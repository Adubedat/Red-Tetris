import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";
import Cell from "../Cell";

const BoardSub = ({ board }) => {
  return (
    <StyledContainer>
      {board.map((cell, i) => (
        <Cell key={i++} color={cell} />
      ))}
    </StyledContainer>
  );
};

BoardSub.propTypes = {
  board: PropTypes.array.isRequired
};

export default BoardSub;
