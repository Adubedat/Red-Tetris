import React from "react";
import {
  StyledContainer,
  StyledLevelContainer,
  StyledScoreContainer
} from "./styles";

const ProgressionSub = ({ score, level }) => {
  return (
    <StyledContainer id="Progression-container">
      <StyledScoreContainer id="Score-container">
        <div className="score-title">
          <p>Score</p>
        </div>
        <div className="score-value">
          <span>{score}</span>
        </div>
      </StyledScoreContainer>
      <StyledLevelContainer id="Level-container">
        <span>Level {level}</span>
      </StyledLevelContainer>
    </StyledContainer>
  );
};

ProgressionSub.propTypes = {};

export default ProgressionSub;
