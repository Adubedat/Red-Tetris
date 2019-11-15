import styled from "styled-components";
import Input from "../common/Input";
import { withStyles } from "@material-ui/core/styles";

export const StyledForm = styled.form`
  align-self: center;
  width: 70%;
  display: flex;
  padding: 1vh;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.2);
`;

export const StyledRoomNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLabel = styled.label`
  padding: 0.5vh;
  font-size: 2vh;
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

export const StyledInput = withStyles({
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
    "& .MuiFormHelperText-root": {
      backgroundColor: "white",
      fontSize: "1.5vh"
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
