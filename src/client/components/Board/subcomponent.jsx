import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";
import Cell from "../Cell";

const board = [];

const BoardSub = ({ roomName }) => {
  for (let index = 0; index < 200; index++) {
    if (index % 2) board[index] = "red";
    else board[index] = "blue";
  }
  let i = 0;
  return (
    <StyledContainer>
      {board.map(c => (
        <Cell key={i++} color={c} />
      ))}
    </StyledContainer>
  );
};

BoardSub.propTypes = {
  roomName: PropTypes.string.isRequired
};

export default BoardSub;
