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
  font-size: 1.5vh;
  width: 100%;
  background: none;
  outline: none;
  color: white;
`;

export const StyledButton = styled.button`
  background: none;
  padding: 0.5vh;
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
