import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  input: {
    fontFamily: "ArcadeClassic"
  },
  label: {
    fontFamily: "ArcadeClassic"
  }
}));

const Input = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      inputRef={ref}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      InputProps={{ classes: { root: classes.input } }}
      InputLabelProps={{ classes: { root: classes.label } }}
    />
  );
});

export default Input;
