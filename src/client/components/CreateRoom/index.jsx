import React, { useState } from "react";
import { connect } from "react-redux";
import { createRoom } from "../../actions/room";
import inputError from "../../errors/inputError";
import CreateRoomSub from "./subcomponent";

let CreateRoom = ({ rooms, playerName, createRoom }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [roomName, setRoomName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // createRoom(roomName, playerName, history);
    window.location.hash = roomName + "[" + playerName + "]";
  };

  const handleChange = e => {
    const value = e.target.value;
    setError(inputError(value));
    setRoomName(value);
  };

  return (
    <div>
      <CreateRoomSub
        onSubmit={handleSubmit}
        label="Insert room name"
        error={error}
        value={roomName}
        onChange={handleChange}
      />
      <ul id="rooms">
        {rooms.map(roomName => {
          return <li key={roomName}>{roomName}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    playerName: state.playerName
  };
};

const actionCreators = { createRoom };

CreateRoom = connect(
  mapStateToProps,
  actionCreators
)(CreateRoom);

export default CreateRoom;
