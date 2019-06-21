import React from "react";
import { connect } from "react-redux";
import GameSub from "./subcomponent";

let Game = ({ roomName }) => {
  return <GameSub roomName={roomName} />;
};

const mapStateToProps = state => {
  return { roomName: state.currentRoom };
};

Game = connect(
  mapStateToProps,
  null
)(Game);

export default Game;
