import React from "react";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 150,
    marginRight: "10px",
    color: "white",
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
      "&.Mui-disabled fieldset": {
        borderColor: "white"
      }
    }
  },
  label: {
    padding: "0.5vh",
    fontSize: "2vh",
    color: "white"
  },
  select: {
    color: "white",
    "& .MuiSelect-icon": {
      color: "white"
    },
    "& .MuiSelect-root": {
      fontFamily: "ArcadeClassic"
    }
  }
}));

const SelectMenu = props => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <label className={classes.label}>{props.label}</label>
      <Select className={classes.select} {...props} input={<OutlinedInput />}>
        {props.children}
      </Select>
      {props.helperText ? (
        <FormHelperText style={{ height: "2vh" }}>
          {props.helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default SelectMenu;
