import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const createRoomContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const CreateRoom = props => {
  let input;

  const handleSubmit = e => {
    const roomName = input.value;
    e.preventDefault();
    console.log(input);
    if (!roomName.trim()) {
      return;
    }
    props.history.push(roomName + "[" + props.username + "]");
  };

  return (
    <div style={createRoomContainer}>
      <p>Create a new room</p>
      <form
        onSubmit={e => handleSubmit(e)}
        style={{ display: "flex", alignItems: "center" }}
      >
        <p>#</p>
        <Input
          label="Room name"
          ref={node => {
            input = node;
          }}
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default CreateRoom;
