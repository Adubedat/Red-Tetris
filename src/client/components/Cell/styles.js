import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  flex: 1 10%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid black;
  ${props =>
    props.color &&
    css`
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      border: 5px outset ${props => props.color};
      background-color: ${props => props.color};
    `};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLetter = styled.p`
  transition: font-size 0.2;
  &:hover {
    font-size: 30px;
  }
`;
