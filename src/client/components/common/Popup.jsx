import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
    borderRadius: 3
  },
  popupStyle: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  }
}));

const Popup = props => {
  const classes = useStyles();

  return (
    <Modal
      {...props}
      open={props.open}
      disableBackdropClick
      className={classes.popupStyle}
    >
      <div className={classes.paper}>{props.children}</div>
    </Modal>
  );
};

export default Popup;
