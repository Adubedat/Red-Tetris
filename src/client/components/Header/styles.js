import styled from "styled-components";

export const StyledContainer = styled.div`
  // position: fixed;
  // width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledUserGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledItemLeft = styled.div`
  flex: 1;
`;
export const StyledItemCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const StyledItemRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const StyledTitle = styled.h1`
  & {
    margin: 0px;
    font-size: 54px;
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
