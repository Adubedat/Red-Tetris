import React from "react";
import { connect } from "react-redux";
import Game from "../Game";
import Login from "../Login";
import CreateRoom from "../CreateRoom";
import RoomList from "../RoomList";
import Ladder from "../Ladder";
import Chat from "../Chat";
import Popup from "../common/Popup";

let Lobby = props => {
  const { playerName, currentRoom } = props;
  const isLogged = playerName ? true : false;

  const render = () => {
    // if (currentRoom !== "Lobby" && currentRoom !== "") {
    //   return <Game />;
    // } else {
    return (
      <div>
        <Popup open={!isLogged}>
          <Login />
        </Popup>
        <CreateRoom {...props} />
        <div style={{ display: "flex", flex: 1, padding: "10px" }}>
          <RoomList />
          <Ladder />
          <Chat />
        </div>
      </div>
    );
    // }
  };

  return render();
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    currentRoom: state.currentRoom
  };
};

Lobby = connect(
  mapStateToProps,
  null
)(Lobby);

export default Lobby;
