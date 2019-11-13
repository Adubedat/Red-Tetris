import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  padding: 1vh;
`;

export const StyledCell = styled.div`
  width: 4vh;
  background: transparent;
  ${props =>
    props.cell &&
    props.color &&
    css`
      border: 5px outset ${props => props.color};
      background: ${props => props.color};
    `};
`;

export const StyledRow = styled.div`
  flex: 1;
  display: flex;
  height: 4vh;
  justify-content: center;
`;
