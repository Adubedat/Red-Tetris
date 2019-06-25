import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 100,
    minHeight: 40,
    padding: "0 1em"
  },
  label: {
    textTransform: "none",
    fontFamily: "ArcadeClassic",
    fontSize: 18,
    fontWeight: 700
  },
  containedPrimary: {
    background: "linear-gradient(#FF8A00, #DC141B)",
    color: "white",
    "&:disabled": {
      background: "transparent",
      color: "gray",
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    }
  }
}));

const MyButton = props => {
  const classes = useStyles(props);

  return (
    <Button {...props} variant="contained" color="primary" classes={classes}>
      {props.children}
    </Button>
  );
};

export default MyButton;
