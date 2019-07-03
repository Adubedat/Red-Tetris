import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid black;
  ${props =>
    props.color !== 0 &&
    css`
      border: 5px outset orange;
      background-color: orange;
    `};
`;
