import styled from "styled-components";

export const StyledContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 70%;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    kbd {
      font-size: 2vh;
      border-radius: 3px;
      padding: 1px 2px 0;
      border: 3px solid white;
    }
    span {
      font-size: 1.5vh;
    }
  }
`;
