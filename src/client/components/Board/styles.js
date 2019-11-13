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
  border-radius: 3px 0px 0px 3px;

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
