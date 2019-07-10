import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  // margin-top: 10px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 0px 5px black;
`;

export const StyledUserGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledItemLeft = styled.div`
  flex: 1;
`;
export const StyledItemCenter = styled.div`
  padding: 10px;
  flex: 1 375px;
  display: flex;
  justify-content: center;
`;
export const StyledItemRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled.h1`
  & {
    margin: 0px;
    font-size: 5vh;
    background: linear-gradient(#ff8a00 0%, #dc141b 100%);
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
