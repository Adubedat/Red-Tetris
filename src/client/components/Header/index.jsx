import React from "react";
import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import HeaderSub from "./subcomponent";
import { requestJoinRoom } from "../../actions/room";

let Header = ({ playerName, connectPlayer, currentRoom, requestJoinRoom }) => {
  const handleLogout = () => connectPlayer("");
  const handleBackHome = () => requestJoinRoom("Lobby");
  const showBackHome = currentRoom !== "Lobby" && currentRoom !== "";
  return (
    <HeaderSub
      appName="Tetris Rouge"
      playerName={playerName}
      roomName={currentRoom}
      onClickLogout={handleLogout}
      onClickBackHome={handleBackHome}
      showBackHome={showBackHome}
    ></HeaderSub>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    currentRoom: state.currentRoom
  };
};

const actionCreators = { connectPlayer, requestJoinRoom };

Header = connect(
  mapStateToProps,
  actionCreators
)(Header);

export default Header;
