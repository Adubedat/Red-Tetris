import React, { useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const createRoomContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const CreateRoom = props => {
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
    const roomName = input.value;
    e.preventDefault();
    console.log(input);
    if (roomNameError(roomName)) return;
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
          error={error}
          helperText={error ? "max 12 alphanumeric characters" : ""}
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
