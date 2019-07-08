import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledLetter } from "./styles";

const CellSub = ({ color, isSpectre = false, letter = "" }) => {
  return (
    <StyledContainer color={color} isSpectre={isSpectre}>
      <StyledLetter>{letter}</StyledLetter>
    </StyledContainer>
  );
};

CellSub.propTypes = {
  color: PropTypes.string.isRequired
};

export default CellSub;
