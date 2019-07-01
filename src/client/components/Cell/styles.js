import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 0.5px dotted black;
  width: 10%;
  height: 5%;
  //   background-color: white;
  ${props =>
    props.color !== 0 &&
    css`
      background-color: orange;
    `};
`;
