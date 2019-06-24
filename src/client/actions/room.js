import socket from "../services/socket-api";
import {
  CREATE_ROOM,
  JOIN_ROOM,
  NEW_ROOM_LIST
} from "../../constants/constants";

export const createRoom = (roomName, playerName, history) => {
  return dispatch => {
    socket.emit(CREATE_ROOM, { roomName }, response => {
      if (response.status === "success") {
        dispatch(joinRoom(roomName));
        // history.push(roomName + "[" + playerName + "]");
      }
    });
  };
};

export const requestJoinRoom = roomName => {
  return dispatch => {
    console.log("[TEST] in request");
    socket.emit(JOIN_ROOM, { roomName }, response => {
      if (response.status === "success") {
        dispatch(joinRoom(roomName));
      }
    });
  };
};

export const joinRoom = roomName => ({
  type: JOIN_ROOM,
  roomName
});

export const newRoomList = roomList => ({
  type: NEW_ROOM_LIST,
  roomList
});
