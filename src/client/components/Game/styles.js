import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 1vh;
  flex: 1;
  display: flex;
`;

export const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  height: 86vh;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0px 3px 3px 0px;
  border: 3px solid white;
  align-items: center;
  .value {
    font-size: 2vh;
  }
`;

export const StyledLeftItem = styled.div`
  flex: 2;
  padding: 1vh;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px 2px 2px 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledRightItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.div`
  font-size: 3vh;
  padding: 1vh;
`;
