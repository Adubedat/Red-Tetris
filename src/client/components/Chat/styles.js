import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex: 4;
  padding: 10px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`;

export const StyledChatContainer = styled.div`
  display: flex;
  flex: 1;
  border: 3px solid white;
  border-radius: 5px;
  height: 0;
  min-height: 100%;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-right: 3px solid white;
`;

export const StyledRightContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  border-bottom: 3px solid white;
`;
export const StyledMessagesContainer = styled.div`
  display: block;
  flex: 1;
  padding: 5px;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const StyledForm = styled.form`
  display: flex;
  padding: 5px;
`;

export const StyledPlayerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 5px;
  border-bottom: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const StyledText = styled.div`
  font-family: Verdana;
  font-size: 1.5vh;
  min-width: 100%;
  width: 0;
  & font {
    font-family: Verdana;
    font-weight: 600;
  }
`;

export const StyledInput = styled.input`
  height: 4vh;
  padding: 0.5vh;
  padding-left: 1vh;
  border-radius: 5px;
  border: 2px solid white;
  font-size: 2vh;
  width: 100%;
  background: none;
  outline: none;
  color: white;
  font-family: Verdana;
  font-size: 1.5vh;
  ::placeholder {
    color: white;
  }
`;
