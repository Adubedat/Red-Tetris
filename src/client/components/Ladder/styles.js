import styled, { css } from "styled-components";

export const StyledMainContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px 60px 2px 2px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  h2 {
    flex: 1;
  }
`;

export const StyledList = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledListItem = styled.div`
  flex: 1;
  display: flex;
  ${props =>
    props.index % 2 === 0 &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
    `};
`;

export const StyledListItemContent = styled.div`
  display: flex;
  justify-content: center;
  div {
    font-size: 1.5vh;
    align-self: center;
  }
  flex: 1;
`;
