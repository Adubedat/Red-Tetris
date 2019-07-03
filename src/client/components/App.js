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

export const App = ({ player, room }) => {
  return (
    <div>
      <Header />
      {!player.name ? (
        <Popup open={true} hideBackdrop>
          <Login />
        </Popup>
      ) : !room.name ? (
        <Lobby />
      ) : (
        <Game />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    player: state.player,
    room: state.room
  };
};

export default connect(mapStateToProps)(hot(module)(App));
