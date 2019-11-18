import socket from "../services/socket-api";
import {
  LEAVE_ROOM,
  UPDATE_ROOM,
  UPDATE_GAME,
  JOIN_ROOM
} from "../../constants/actionTypes";

export const updateRoom = room => ({
  type: UPDATE_ROOM,
  room
});

export const joinRoom = roomName => {
  return () => {
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

export const updateGame = game => ({
  type: UPDATE_GAME,
  game
});
