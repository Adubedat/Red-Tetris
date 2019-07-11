import styled from "styled-components";
import Input from "../common/Input";
import { withStyles } from "@material-ui/core/styles";

export const StyledForm = styled.form`
  height: 10%;
  display: flex;
  padding: 10px;
  border: 3px solid white;
  border-radius: 2px;
`;

export const StyledRegisterGroup = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  background: none;
  padding: 0px;
  margin: 10px;
  border: 0px;
  outline: none;
  opacity: 0;
  transition: opacity 0.2s;
  &:enabled {
    opacity: 1;
  }
`;

export const StyledTextField = withStyles({
  root: {
    "&": {
      margin: 0
    },
    "& label.Mui-focused": {
      color: "white"
    },
    "& label": {
      color: "white"
    },
    "& input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(Input);
