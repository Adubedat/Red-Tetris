import socket from "../services/socket-api";
import {
  DISCONNECT_PLAYER,
  NEW_PLAYER,
  UPDATE_PLAYER,
  UPDATE_PLAYERS_LIST
} from "../../constants/actionTypes";
import { updateRoom } from "./room";

export const connectPlayer = playerName => {
  return () => {
    socket.emit(NEW_PLAYER, playerName);
  };
};

export const disconnectPlayer = () => {
  return dispatch => {
    socket.emit(DISCONNECT_PLAYER);
    dispatch(updateRoom({}));
    window.location.hash = "";
    dispatch(updatePlayer({}));
  };
};

export const updatePlayer = player => ({
  type: UPDATE_PLAYER,
  player
});

export const updatePlayersList = players => ({
  type: UPDATE_PLAYERS_LIST,
  players
});
