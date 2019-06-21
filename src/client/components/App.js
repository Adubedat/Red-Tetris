import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import EventListener from "react-event-listener";
import Lobby from "./Lobby";
import Header from "./Header";
import Game from "./Game";
import { setConfig } from "react-hot-loader"; //to remove
import { toast } from "react-toastify";
import { handleHash } from "../actions/actions";
import "react-toastify/dist/ReactToastify.css";

setConfig({
  reloadHooks: false
});

toast.configure();

let App = ({ handleHash, currentRoom }) => {
  handleHash();

  // const component =
  //   currentRoom === "Lobby" || currentRoom === "" ? Lobby : Game;
  return (
    <div>
      <EventListener target="window" onHashChange={handleHash} />
      <Header />
      <Lobby />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom
  };
};

const actionCreators = { handleHash };

App = connect(
  mapStateToProps,
  actionCreators
)(App);

export default hot(module)(App);
