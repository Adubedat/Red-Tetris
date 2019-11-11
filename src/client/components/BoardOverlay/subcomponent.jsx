import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledGameOverText } from "./styles";

const BoardOverlaySub = ({ isGameOver, hasLost }) => {
  return (
    <StyledContainer id="overlay">
      {hasLost && <StyledGameOverText>GAME OVER</StyledGameOverText>}
      {isGameOver && !hasLost && (
        <StyledGameOverText>YOU WIN</StyledGameOverText>
      )}
    </StyledContainer>
  );
};

BoardOverlaySub.propTypes = {
  board: PropTypes.array.isRequired,
  isSpectre: PropTypes.bool
};

export default BoardOverlaySub;
