import styled, { css } from "styled-components";
import { PURE_ORANGE, CRIMSON } from "../../../constants/colors";

export const StyledAspectRatio = styled.div`
  padding-top: 200%;
  width: 100%;
  height: 0;
  position: relative;
  // box-sizing: border-box;
`;

export const StyledAspectRatioContainer = styled.div`
  flex-basis: 25%;
  // box-sizing: border-box;
  text-align: center;
  max-width: 500px;
  min-width: 325px;
  ${props =>
    props.isSpectre &&
    css`
      flex-basis: 30%;
      padding: 1em;
      min-width: 100px;
      max-width: 150px;
    `};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  border: 4px solid black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // box-sizing: border-box;
  ${props =>
    props.isSpectre &&
    css`
      border: 2px solid black;
      background: linear-gradient(${PURE_ORANGE} 0%, ${CRIMSON} 100%);
    `};
`;

export const StyledRow = styled.div`
  flex: 1;
  display: flex;
`;
