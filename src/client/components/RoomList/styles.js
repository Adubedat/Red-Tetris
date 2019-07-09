import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px;
`;

export const StyledList = styled.div`
  height: 100%;
  border: 3px solid white;
  border-radius: 5px 5px 5px 40px;
  // background-color: rgb(255, 255, 255, 0.1);
`;

export const StyledListItem = styled.div`
  height: 5%;
  flex-grow: 1;
  display: flex;
  background-color: rgb(255, 255, 255, 0.1);
  align-items: center;
  transition: background-color 0.3s, font-size 0.3s;
  &:hover {
    background-color: rgb(255, 255, 255, 0.2);
  }
  &:hover #content {
    font-size: 1.8vh;
  }
`;

export const StyledListItemContent = styled.div`
  & #content {
    font-size: 1.5vh;
  }
  display: flex;
  justify-content: center;
  ${css`
    flex: ${props => props.flex};
  `};
`;

export const StyledListSubHeader = styled.div`
  & #header {
    font-size: 2vh;
  }
  // background-color: rgb(255, 255, 255, 0.1);
  height: 6%;
  display: flex;
  align-items: center;
  border-bottom: 3px solid white;
`;

export const StyledListSubHeaderColumn = styled.div`
  display: flex;
  justify-content: center;
  ${css`
    flex: ${props => props.flex};
  `};
`;
