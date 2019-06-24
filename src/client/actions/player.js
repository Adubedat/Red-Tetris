import socket from "../services/socket-api";
import {
  REMOVE_PLAYER,
  NEW_PLAYER,
  CONNECT_PLAYER
} from "../../constants/constants";
import { joinRoom } from "./room";
export const newPlayer = playerName => {
  return dispatch => {
    socket.emit(NEW_PLAYER, playerName, response => {
      if (response.status === "success") {
        dispatch(connectPlayer(playerName));
      }
    });
  };
};

export const disconnectPlayer = () => {
  return dispatch => {
    socket.emit(REMOVE_PLAYER);
    dispatch(joinRoom(""));
    window.location.hash = "";
    dispatch(connectPlayer(""));
  };
};

export const connectPlayer = playerName => ({
  type: CONNECT_PLAYER,
  playerName
});
