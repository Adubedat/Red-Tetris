export const CONNECT_USER = "CONNECT_USER";
export const ADD_ROOM = "ADD_ROOM";

export const connectUser = username => ({
  type: CONNECT_USER,
  username
});

export const addRoom = room => {
  console.log("in add room");

  return {
    event: "add room",
    handle: ADD_ROOM,
    room
  };
};
