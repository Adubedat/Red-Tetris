import React from "react";
import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import HeaderSub from "./subcomponent";

let Header = ({ playerName, connectPlayer }) => {
  const handleLogout = () => connectPlayer("");
  return (
    <HeaderSub
      appName="Tetris Rouge"
      playerName={playerName}
      onClick={handleLogout}
    ></HeaderSub>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName
  };
};

const actionCreators = { connectPlayer };

Header = connect(
  mapStateToProps,
  actionCreators
)(Header);

export default Header;
