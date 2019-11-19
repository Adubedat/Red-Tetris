import React from "react";
import styled from "styled-components";
import Cell from "../Cell";
import { CRIMSON, PURE_ORANGE } from "../../../constants/colors";

const StyledButton = styled.button`
  background: none;
  padding: 0px;
  margin: 0px;
  border: 0px;
  position: relative;
  top: -1020px;
  opacity: 0;
  transition: top 1s ease-out, transform 1s ease-out, opacity 1s;
  &:enabled {
    top: 0px;
    transform: rotate(720deg);
    opacity: 1;
  }
`;

const StyledTetriminos = styled.div`
  margin: 0;
  height: 40px;
  width: 160px;
  display: flex;
`;

const TetriButton = ({ disabled }) => {
  return (
    <StyledButton disabled={disabled} type="submit">
      <StyledTetriminos>
        <Cell color={PURE_ORANGE} letter="P"></Cell>
        <Cell color={CRIMSON} letter="L"></Cell>
        <Cell color={PURE_ORANGE} letter="A"></Cell>
        <Cell color={CRIMSON} letter="Y"></Cell>
      </StyledTetriminos>
    </StyledButton>
  );
};
export default TetriButton;
