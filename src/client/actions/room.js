import socket from "../services/socket-api";
import {
  LEAVE_ROOM,
  UPDATE_ROOM,
  NEW_ROOM_LIST,
  JOIN_ROOM
} from "../../constants/constants";

export const updateRoom = roomName => ({
  type: UPDATE_ROOM,
  roomName
});

export const joinRoom = roomName => {
  return dispatch => {
    socket.emit(JOIN_ROOM, roomName, response => {
      if (response.status === "success") {
        dispatch(updateRoom(roomName));
      }
    });
  };
};

export const leaveRoom = () => {
  return dispatch => {
    socket.emit(LEAVE_ROOM);
    dispatch(updateRoom(""));
    window.location.hash = "";
  };
};

export const newRoomList = roomList => ({
  type: NEW_ROOM_LIST,
  roomList
});
