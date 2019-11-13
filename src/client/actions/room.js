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

/*

dispatch must be present to pass the action in the middleware
response is used serverside

*/

export const joinRoom = roomName => {
  return dispatch => {
    socket.emit(JOIN_ROOM, roomName);
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
