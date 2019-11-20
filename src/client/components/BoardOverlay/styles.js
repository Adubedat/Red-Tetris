import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid white;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -3px;
  height: 86vh;
  width: 43vh;
  h2 {
    margin-top: 40px;
    align-self: center;
  }
`;

export const StyledGameOverText = styled.h1`
  align-self: center;
  font-size: 5vh;
`;
