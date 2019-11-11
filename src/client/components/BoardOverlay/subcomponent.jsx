import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledGameOverText } from "./styles";
import Controls from "../Controls";

const BoardOverlaySub = ({ isGameOver, hasLost, isStarted }) => {
  return (
    <StyledContainer id="overlay">
      {hasLost && <StyledGameOverText>GAME OVER</StyledGameOverText>}
      {isGameOver && !hasLost && (
        <StyledGameOverText>YOU WIN</StyledGameOverText>
      )}
      {!isStarted && <Controls />}
    </StyledContainer>
  );
};

BoardOverlaySub.propTypes = {
  hasLost: PropTypes.bool,
  isGameOver: PropTypes.bool,
  isStarted: PropTypes.bool
};

export default BoardOverlaySub;
