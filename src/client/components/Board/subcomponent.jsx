import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledRow,
  StyledAspectRatio,
  StyledAspectRatioContainer
} from "./styles";
import Cell from "../Cell";

const BoardSub = ({ board, playerName = "", isSpectre = false }) => {
  return (
    <StyledAspectRatioContainer
      id="aspect-ratio-container"
      isSpectre={isSpectre}
    >
      <StyledAspectRatio id="aspect-ratio">
        <StyledContainer id="board" isSpectre={isSpectre}>
          {board.map((row, i) => (
            <StyledRow id="row" key={i}>
              {row.map((cell, i) => (
                <Cell key={i} color={cell} isSpectre={isSpectre} />
              ))}
            </StyledRow>
          ))}
        </StyledContainer>
      </StyledAspectRatio>
      {playerName ? <p>{playerName}</p> : null}
    </StyledAspectRatioContainer>
  );
};

BoardSub.propTypes = {
  board: PropTypes.array.isRequired,
  isSpectre: PropTypes.bool
};

export default BoardSub;
