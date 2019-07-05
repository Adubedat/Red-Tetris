import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import Lobby from "./Lobby";
import Header from "./Header";
import Game from "./Game";
import Login from "./Login";
import Popup from "./common/Popup";
import { setConfig } from "react-hot-loader"; //to remove
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setConfig({
  reloadHooks: false
});

toast.configure();

export const App = ({ playerName, roomName }) => {
  return (
    <div>
      <Header />
      {!playerName ? (
        <Popup open={true} hideBackdrop>
          <Login />
        </Popup>
      ) : !roomName ? (
        <Lobby />
      ) : (
        <Game />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.player.name,
    roomName: state.room.name
  };
};

export default connect(mapStateToProps)(hot(module)(App));
