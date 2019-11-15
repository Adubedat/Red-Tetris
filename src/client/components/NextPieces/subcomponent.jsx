import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledRow, StyledCell } from "./styles";

const NextPieces = ({ nextPiece }) => {
  return (
    <StyledContainer id="next-pieces-container">
      <p>NEXT:</p>
      <div id="next-piece">
        {nextPiece.shape
          ? nextPiece.shape.map((row, i) => (
              <StyledRow id="row" key={i}>
                {row.map((cell, i) => (
                  <StyledCell key={i} cell={cell} color={nextPiece.color} />
                ))}
              </StyledRow>
            ))
          : null}
      </div>
    </StyledContainer>
  );
};

NextPieces.propTypes = {
  nextPiece: PropTypes.object.isRequired
};

export default NextPieces;
