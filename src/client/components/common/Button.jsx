import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const MyButton = props => {
  const classes = useStyles();

  return (
    <Button
      {...props}
      variant="contained"
      color="secondary"
      className={classes.button}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
