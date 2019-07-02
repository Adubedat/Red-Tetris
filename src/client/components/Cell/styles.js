import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid black;
  width: 10%;
  height: 5%;
  ${props =>
    props.color !== 0 &&
    css`
      border: 3px outset orange;
      background-color: orange;
    `};
`;
