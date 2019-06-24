import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledUserGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  background: linear-gradient(#ff8a00 0%, #dc141b 100%);
  background-clip: "text";
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
