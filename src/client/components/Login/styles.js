import styled from "styled-components";
import Input from "../common/Input";
import { withStyles } from "@material-ui/core/styles";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledForm = styled.form`
  flex-basis: 1 1 auto;
  width: 440px;
  height: 160px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledTextField = withStyles({
  root: {
    "&": {
      width: 400
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
    "& .MuiFormHelperText-root": {
      backgroundColor: "white",
      fontSize: "16px"
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
