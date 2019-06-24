import socket from "../services/socket-api";
import {
  LEAVE_ROOM,
  JOIN_ROOM,
  NEW_ROOM_LIST
} from "../../constants/constants";

export const joinRoom = roomName => ({
  type: JOIN_ROOM,
  roomName
});

export const leaveRoom = () => {
  return dispatch => {
    socket.emit(LEAVE_ROOM);
    dispatch(joinRoom(""));
    window.location.hash = "";
  };
};

export const newRoomList = roomList => ({
  type: NEW_ROOM_LIST,
  roomList
});
