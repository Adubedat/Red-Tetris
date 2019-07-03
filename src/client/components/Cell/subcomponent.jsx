import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

const CellSub = ({ color, isSpectre = false }) => {
  return (
    <StyledContainer color={color} isSpectre={isSpectre}></StyledContainer>
  );
};

CellSub.propTypes = {
  color: PropTypes.number.isRequired
};

export default CellSub;
