import styled from "styled-components";
import Input from "../common/Input";
import { withStyles } from "@material-ui/core/styles";

export const StyledForm = styled.form`
  height: 100px;
  display: flex;
  padding: 10px;
  border: 3px solid white;
  border-radius: 20px 2px
  flex-direction: column;
`;

export const StyledRegisterGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTextField = withStyles({
  root: {
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
