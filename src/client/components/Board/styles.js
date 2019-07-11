import styled, { css } from "styled-components";

// export const StyledAspectRatio = styled.div`
//   padding-top: 200%;
//   width: 100%;
//   height: 0;
//   position: relative;
// `;

// export const StyledAspectRatioContainer = styled.div`
//   flex: 1;
//   text-align: center;
//   // max-width: 500px;
//   // min-width: 250px;
//   ${props =>
//     props.isSpectre &&
//     css`
//       flex-basis: 30%;
//       padding: 1em;
//       min-width: 100px;
//       max-width: 150px;
//     `};
// `;

// export const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 0px;
//   border: 4px solid black;
//   background-color: rgba(0, 0, 0, 0.3);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   ${props =>
//     props.isSpectre &&
//     css`
//       border: 2px solid black;
//       background: linear-gradient(#ff8a00 0%, #dc141b 100%);
//     `};
// `;

export const StyledContainer = styled.div`
  align-self: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  // min-height: 400px;
  // min-width: 200px;
  height: 86vh;
  width: 43vh;
  border: 3px solid white;
  border-radius: 5px;
  ${props =>
    props.isSpectre &&
    css`
      border: 2px solid white;
      border-radius: 1px;
      height: 30vh;
      width: 15vh;
      background-color: rgba(0, 0, 0, 0.3);
    `};
`;

export const StyledRow = styled.div`
  flex: 1;
  display: flex;
`;
