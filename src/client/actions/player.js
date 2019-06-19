import socket from "../services/socket-api";
import { joinRoom } from "./room";
import { showToast } from "./actions";

export const NEW_PLAYER = "NEW_PLAYER";

export const CONNECT_PLAYER = "CONNECT_PLAYER";

export const newPlayer = playerName => {
  return dispatch => {
    socket.emit(NEW_PLAYER, { playerName }, response => {
      if (response.status === "error") {
        dispatch(showToast(true, response.message));
      } else if (response.status === "success") {
        dispatch(showToast(false, response.message));
        dispatch(connectPlayer(playerName));
        dispatch(joinRoom("Lobby"));
      }
    });
  };
};

export const connectPlayer = playerName => ({
  type: CONNECT_PLAYER,
  playerName
});
