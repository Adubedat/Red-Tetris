import socket from "../services/socket-api";
import { connectPlayer } from "./player";
import { joinRoom } from "./room";

export const HASH_CHANGED = "HASH_CHANGED";

export const hashChanged = hash => {
  return dispatch => {
    console.log("hashChanged action");
    socket.emit(HASH_CHANGED, { hash }, response => {
      if (response.status === "success") {
        console.log("hashChanged client callback success");
        dispatch(connectPlayer(response.playerName));
        dispatch(joinRoom(response.roomName));
      }
    });
  };
};
