import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 86vh;
  width: 43vh;
  border: 3px solid white;
  border-radius: 5px;
  ${props =>
    props.isSpectre &&
    css`
      border: 2px solid white;
      border-radius: 2px;
      height: 30vh;
      width: 15vh;
      background-color: rgba(0, 0, 0, 0.3);
    `};
`;

export const StyledRow = styled.div`
  flex: 1;
  display: flex;
`;
export const StyledGameOverContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  border: 3px solid white;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -3px;
  height: 86vh;
  width: 43vh;
`;

export const StyledGameOverText = styled.h1`
  align-self: center;
  font-size: 5vh;
`;
