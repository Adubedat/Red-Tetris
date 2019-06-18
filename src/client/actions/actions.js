import socket from "../services/socket-api";

export const CONNECT_PLAYER = "CONNECT_PLAYER";

export const CREATE_ROOM = "CREATE_ROOM";

export const HASH_ERROR = "HASH_ERROR";

export const NEW_ROOM_LIST = "NEW_ROOM_LIST";

export const setHashError = value => ({ type: "HASH_ERROR", hashError: value });

export const connectPlayer = playerName => ({
  type: CONNECT_PLAYER,
  playerName
});

export const subscribeNewRoomList = () => {
  console.log("action : subscribeNewRoomList");
  return dispatch => {
    console.log("newRoomList dispatched");
    socket.on("newRoomList", newRoomList => {
      dispatch({
        type: NEW_ROOM_LIST,
        payload: newRoomList
      });
    });
  };
};

export const createRoom = roomName => {
  console.log("action : createRoom");
  socket.emit("createRoom", roomName);
  return dispatch => {
    dispatch({
      type: CREATE_ROOM
    });
  };
};
