import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledGameOverText } from "./styles";
import Controls from "../Controls";

const BoardOverlaySub = ({ hasLost, isStarted, inGame, isHost }) => {
  const displayStartGame = () => {
    if (isStarted) return;
    if (isHost) {
      return <h2 id="start-game">Press enter to start</h2>;
    } else {
      return <h2 id="start-game">Wait for host to start</h2>;
    }
  };

  return (
    <StyledContainer id="overlay">
      {hasLost && <StyledGameOverText>GAME OVER</StyledGameOverText>}
      {inGame && !hasLost && !isStarted && (
        <StyledGameOverText>YOU WIN</StyledGameOverText>
      )}
      {!isStarted && <Controls />}
      {displayStartGame()}
    </StyledContainer>
  );
};

BoardOverlaySub.propTypes = {
  hasLost: PropTypes.bool,
  isStarted: PropTypes.bool,
  inGame: PropTypes.bool,
  isHost: PropTypes.bool
};

export default BoardOverlaySub;
