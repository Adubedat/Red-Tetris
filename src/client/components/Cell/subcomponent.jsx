import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

const CellSub = ({ color }) => {
  return <StyledContainer color={color}></StyledContainer>;
};

CellSub.propTypes = {};

export default CellSub;
