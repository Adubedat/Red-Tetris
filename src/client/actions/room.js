import socket from "../services/socket-api";
import {
  LEAVE_ROOM,
  UPDATE_ROOM,
  UPDATE_ROOMS,
  JOIN_ROOM
} from "../../constants/constants";

export const updateRoom = room => ({
  type: UPDATE_ROOM,
  room
});

export const joinRoom = roomName => {
  return dispatch => {
    socket.emit(JOIN_ROOM, roomName, response => {});
  };
};

export const leaveRoom = () => {
  return dispatch => {
    socket.emit(LEAVE_ROOM);
    dispatch(updateRoom({}));
    window.location.hash = "";
  };
};

export const updateRooms = rooms => ({
  type: UPDATE_ROOMS,
  rooms
});
