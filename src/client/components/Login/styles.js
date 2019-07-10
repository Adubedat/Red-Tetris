import styled from "styled-components";
import Input from "../../components/common/Input";
import { withStyles } from "@material-ui/core/styles";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  flex-basis: 1 1 auto;
  width: 160px;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledTextField = withStyles({
  root: {
    "&": {
      width: 320
    },
    "& .mdc-text-field-helper-line": {
      color: "red"
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
