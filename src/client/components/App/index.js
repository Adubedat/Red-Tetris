import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { setConfig } from "react-hot-loader"; //to remove
import "react-toastify/dist/ReactToastify.css";
import AppSub from "./subcomponent";

setConfig({
  reloadHooks: false
});

const mapStateToProps = state => {
  return {
    playerName: state.player.name,
    roomName: state.room.name
  };
};

export default connect(mapStateToProps)(hot(module)(AppSub));
