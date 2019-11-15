import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  // padding-top: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled.div`
  font-size: 3vh;
  padding: 1vh;
`;

export const StyledScoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px;
  }
  .score-title {
    p {
      font-size: 3vh;
    }
  }
  .score-value {
    background-color: rgba(0, 0, 0, 0.2);
    // border-top: 1px solid white;
    // border-bottom: 1px solid white;
    span {
      font-size: 2.5vh;
    }
  }
`;
export const StyledLevelContainer = styled.div`
  padding: 4px 0 4px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  span {
    font-size: 1.8vh;
  }
`;
