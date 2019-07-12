import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px 60px 2px 2px;
`;

export const StyledButton = styled.button`
  background: none;
  font-size: 2.5vh;
  color: white;
  padding: 0.5vh;
  border: 0px;
  outline: none;
  opacity: 0;
  transition: opacity 0.2s;
  &:enabled {
    opacity: 1;
  }
`;

export const StyledRoomName = styled.h2`
  align-self: flex-start;
`;
