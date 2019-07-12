import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    background: url(assets/tetris-theme.jpg);
    background-size: cover;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  // background-size: cover;
`;
