import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHorizontalText = styled.div`
  & {
    width: 100%;
    text-align: center;
    background-color: #ffffff;
    position: relative;
    color: #ababab;
    font-size: 14px;
    z-index: 1;
    overflow: hidden;
  }
  &:after {
    margin-left: 2%;
    width: 50%;
    top: 51%;
    overflow: hidden;
    height: 1px;
    background-color: #d0d0d0;
    content: "\a0";
    position: absolute;
  }
  &:before {
    margin-left: -52%;
    text-align: right;
    width: 50%;
    top: 51%;
    overflow: hidden;
    height: 1px;
    background-color: #d0d0d0;
    content: "\a0";
    position: absolute;
  }
`;

export const StyledRegisterGroup = styled.div`
  display: flex;
  align-items: center;
`;
