import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { connect } from "react-redux";
import { createRoom } from "../../actions/room";
import styles from "./styles";

let CreateRoom = props => {
  const { rooms, createRoom } = props;
  let input;

  const handleSubmit = e => {
    e.preventDefault();
    const roomName = input.value;
    createRoom(roomName, props.playerName, props.history);
  };

  return (
    <div style={styles.createRoomContainer}>
      <p>Create a new room</p>
      <form
        onSubmit={e => handleSubmit(e)}
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1>#</h1>
        <Input
          label="Room name"
          ref={node => {
            input = node;
          }}
        />
        <Button type="submit">Create</Button>
      </form>
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
    rooms: state.rooms
  };
};

const actionCreators = { createRoom };

CreateRoom = connect(
  mapStateToProps,
  actionCreators
)(CreateRoom);

export default CreateRoom;
