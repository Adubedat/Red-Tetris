import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 1px 0px 5px black;
`;

export const StyledItemLeft = styled.div`
  padding-left: 2vh;
  flex: 1;
  justify-content: center;
`;
export const StyledItemCenter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
export const StyledItemRight = styled.div`
  flex: 1;
  display: flex;
  font-size: 2vh;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const StyledTitle = styled.h1`
  & {
    margin: 0px;
    font-size: 5vh;
    background: linear-gradient(#ff8a00 60%, white 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;

  &:after {
    background: none;
    content: attr(data-text);
    left: 0;
    position: absolute;
    text-shadow: 6px 6px 10px #000000;
    top: 0;
    z-index: -1;
  }
`;

export const StyledButton = styled.button`
  background: none;
  color: #ffffff80;
  padding: 0.5vh;
  border: 0px;
  outline: none;
  opacity: 0.5;
  transition: opacity 0.2s;
  background: rgb(255, 255, 255, 0.2);
  border-radius: 5px;

  &:hover {
    opacity: 1;
  }
  font-size: 3vh;
  // color: #fffffff;
`;
