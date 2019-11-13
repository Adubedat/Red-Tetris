import React from "react";
import { StyledContainer, StyledLabel } from "./styles";

const ProgressionSub = ({ score, level }) => {
  return (
    <StyledContainer id="Progression-container">
      <StyledLabel>Level :</StyledLabel>
      <div className="value">{level}</div>
      <StyledLabel>Score :</StyledLabel>
      <div className="value">{score}</div>
    </StyledContainer>
  );
};

ProgressionSub.propTypes = {};

export default ProgressionSub;
