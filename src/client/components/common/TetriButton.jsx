import React from "react";
import styled from "styled-components";
import Cell from "../Cell";

const StyledButton = styled.button`
  background: none;
  padding: 0px;
  margin: 0px;
  border: 0px;
  position: relative;
  top: -1020px;
  transition: top 1s, transform 1s;
  &:enabled {
    top: 0px;
    transform: rotate(720deg);
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
        <Cell color="#14d4dc" letter="P"></Cell>
        <Cell color="#dc143c" letter="L"></Cell>
        <Cell color="#ff8b00" letter="A"></Cell>
        <Cell color="#3cdc14" letter="Y"></Cell>
      </StyledTetriminos>
    </StyledButton>
  );
};
export default TetriButton;
