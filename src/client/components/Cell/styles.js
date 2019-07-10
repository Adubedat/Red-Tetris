import styled, { css } from "styled-components";

// export const StyledContainer = styled.div`
//   flex: 1 10%;
//   // box-sizing: border-box;
//   border: 1px solid black;
//   ${props =>
//     props.color &&
//     !props.isSpectre &&
//     css`
//       border: 5px outset ${props => props.color};
//       background-color: ${props => props.color};
//     `};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${props =>
//     props.isSpectre &&
//     css`
//       border: 0px;
//       ${props =>
//         !props.color &&
//         css`
//           background: #375f64;
//         `};
//     `};
// `;

export const StyledContainer = styled.div`
  flex: 1 10%;
  // box-sizing: border-box;
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
        !props.color &&
        css`
          background: #375f64;
        `};
    `};
`;
export const StyledLetter = styled.p`
  font-size: 20px;
  transition: font-size 0.2;
  &:hover {
    font-size: 30px;
  }
`;
