import styled from "styled-components";
import Input from "../common/Input";
import { withStyles } from "@material-ui/core/styles";

export const StyledForm = styled.form`
  align-self: center;
  width: 50%;
  display: flex;
  padding: 1vh;
  // border: 3px solid white;
  border-radius: 4px;
  flex-flow: column;
  justify-content: center;
  background: rgb(0, 0, 0, 0.2);
`;

export const StyledLabel = styled.label`
  padding: 0.5vh;
  font-size: 2vh;
  color: white;
`;

export const StyledInputContainer = styled.div`
  border-radius: 5px;
  border: 2px solid white;
`;

export const StyledInput = styled.input`
  height: 4vh;
  padding: 0.5vh;
  padding-left: 1vh;
  font-family: ArcadeClassic;
  border: 0px;
  font-size: 2vh;
  width: 100%;
  background: none;
  outline: none;
  color: white;
`;

export const StyledButton = styled.button`
  height: 2vh;
  background: none;
  border: 0px;
  outline: none;
  opacity: 0;
  &:enabled {
    opacity: 1;
  }
  &:disabled {
    heigth: 0px;
  }
`;

export const StyledTextField = withStyles({
  root: {
    "&": {
      marginTop: 0,
      marginRight: 10
    },
    "& label.Mui-focused": {
      color: "white"
    },
    "$ .MuiFormHelperText-contained p": {
      height: "2vh"
    },
    "& label": {
      color: "white"
    },
    "& input": {
      color: "white"
    },
    "& Mui-error": {
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
      },
      "&.Mui-error fieldset": {
        borderColor: "white"
      }
    }
  }
})(Input);
