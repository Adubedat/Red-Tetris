import React, { useState } from "react";
import { connect } from "react-redux";
import { createRoom } from "../../actions/room";
import inputError from "../../errors/inputError";
import { subscribeNewRoomList } from "../../listeners";
import CreateRoomSub from "./subcomponent";

let CreateRoom = ({ rooms, createRoom, subscribeNewRoomList }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [roomName, setRoomName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    //createRoom(roomName, props.history);
    // props.history.push(roomName + "[" + props.playerName + "]");
  };

  const handleChange = e => {
    const value = e.target.value;
    setError(inputError(value));
    setRoomName(value);
  };

  subscribeNewRoomList();
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
    roomNameError: state.error.roomNameError
  };
};

const actionCreators = { createRoom, subscribeNewRoomList };

CreateRoom = connect(
  mapStateToProps,
  actionCreators
)(CreateRoom);

export default CreateRoom;
