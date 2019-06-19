import socket from "../services/socket-api";
import { showToast } from "./actions";

export const CREATE_ROOM = "CREATE_ROOM";

export const JOIN_ROOM = "JOIN_ROOM";

export const NEW_ROOM_LIST = "NEW_ROOM_LIST";

export const JOIN_ROOM_ERROR = "JOIN_ROOM_ERROR";

export const createRoom = roomName => {
  return dispatch => {
    socket.emit(CREATE_ROOM, { roomName }, response => {
      if (response.status === "error") {
        dispatch(showToast(true, response.message));
      } else if (response.status === "success") {
        dispatch(showToast(false, response.message));
        dispatch(joinRoom(roomName));
      }
    });
  };
};

export const requestJoinRoom = roomName => {
  return dispatch => {
    socket.emit(JOIN_ROOM, { roomName }, status => {
      if (status === "success") {
        dispatch(joinRoomError(false));
        dispatch(joinRoom(roomName));
      } else if (status === "error") {
        dispatch(joinRoomError(true));
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

export const joinRoomError = error => ({
  type: JOIN_ROOM_ERROR,
  error
});
