import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { connect } from "react-redux";
import { addRoom } from "../actions/actions";

const createRoomContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

let CreateRoom = props => {
  const { rooms, addRoom } = props;
  let input;

  const handleSubmit = e => {
    e.preventDefault();
    const room = {
      name: input.value,
      id: Math.random()
    };
    if (!room.name.trim()) return;
    addRoom(room);
    // props.history.push(roomName + "[" + props.username + "]");
  };

  return (
    <div style={createRoomContainer}>
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
        {rooms.map(room => {
          return <li key={room.id}>{room.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { rooms: state.rooms };
};

const actionCreators = { addRoom };

CreateRoom = connect(
  mapStateToProps,
  actionCreators
)(CreateRoom);

export default CreateRoom;
