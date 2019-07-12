import styled, { css } from "styled-components";
import { DARK_CYAN } from "../../../constants/colors";

export const StyledContainer = styled.div`
  flex: 1 10%;
  border: 1px solid black;
  ${props =>
    props.color &&
    !props.isSpectre &&
    css`
      border: 5px outset ${props => props.color};
      background-color: ${props => props.color};
    `};
  ${props =>
    props.isSpectre &&
    css`
      border: 0px;
      ${props =>
        props.color &&
        css`
          border: 2px outset #ff8a00;
          background: #ff8a0080;
        `};
    `};
`;

export const StyledLetter = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: font-size 0.2;
  &:hover {
    font-size: 30px;
  }
`;
