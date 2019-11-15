import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  border-bottom: 3px solid white;
  p {
    font-size: 3vh;
    margin-bottom: 30px;
    position: relative;
    left: 20px;
  }
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
