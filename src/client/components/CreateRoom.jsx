import React, { useState } from "react";
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
  const [error, setError] = useState(false);

  const roomNameError = roomName => {
    const regexp = /\w{1,12}/;
    const found = roomName.match(regexp);
    if (!found || found.length !== 1 || found[0] !== roomName) {
      setError(true);
      return true;
    }
    setError(false);
    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
    const room = {
      name: input.value,
      id: Math.random()
    };
    if (roomNameError(room.name)) return;
    addRoom(room);
    props.history.push(room.name + "[" + props.username + "]");
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
          error={error}
          helperText={error ? "max 12 alphanumeric characters" : ""}
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
