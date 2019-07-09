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
  width: 320px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: black;
`;

export const StyledButton = styled.button`
  padding: 0px;
  margin: 10px;
  border: 0px;
  position: relative;
  width: 50%;
  height: 20%;
  animation: dropForm 2s;

  @keyframes dropForm {
    from {
      transform: rotate(360deg);
      top: -1020px;
    }
    to {
      top: 0px;
    }
  }
`;

export const StyledTetriminos = styled.div`
  position: absolute;
  margin: 0;
  height: 40px;
  width: 160px;
  display: flex;
`;

export const StyledTextField = withStyles({
  root: {
    "&": {
      width: 240
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

// export const StyledHorizontalText = styled.div`
//   & {
//     width: 100%;
//     text-align: center;
//     background-color: #ffffff;
//     position: relative;
//     color: #ababab;
//     font-size: 14px;
//     z-index: 1;
//     overflow: hidden;
//     margin-top: 40px;
//     margin-bottom: 40px;
//   }
//   &:after {
//     margin-left: 2%;
//     width: 50%;
//     top: 51%;
//     overflow: hidden;
//     height: 1px;
//     background-color: #d0d0d0;
//     content: "\a0";
//     position: absolute;
//   }
//   &:before {
//     margin-left: -52%;
//     text-align: right;
//     width: 50%;
//     top: 51%;
//     overflow: hidden;
//     height: 1px;
//     background-color: #d0d0d0;
//     content: "\a0";
//     position: absolute;
//   }
// `;
