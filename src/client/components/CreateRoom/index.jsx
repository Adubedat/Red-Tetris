import React, { useState } from "react";
import { connect } from "react-redux";
import inputError from "../../errors/inputError";
import CreateRoomSub from "./subcomponent";

let CreateRoom = ({ playerName }) => {
  const [error, setError] = useState({ boolean: null, message: "" });
  const [roomName, setRoomName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    playerName: state.playerName
  };
};

CreateRoom = connect(
  mapStateToProps,
  null
)(CreateRoom);

export default CreateRoom;
