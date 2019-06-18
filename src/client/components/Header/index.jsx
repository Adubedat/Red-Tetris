import React from "react";
import { connect } from "react-redux";
import { connectPlayer } from "../../actions/actions";
import Header from "./subcomponent";

let HeaderContainer = ({ playerName, connectPlayer }) => {
  const handleLogout = () => connectPlayer(null);
  return (
    <Header
      appName="Tetris Rouge"
      playerName={playerName}
      onClick={handleLogout}
    ></Header>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName
  };
};

const actionCreators = { connectPlayer };

HeaderContainer = connect(
  mapStateToProps,
  actionCreators
)(HeaderContainer);

export default HeaderContainer;
