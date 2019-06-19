import socket from "../services/socket-api";
import { connectPlayer } from "./player";
import { joinRoom } from "./room";

export const HASH_CHANGED = "HASH_CHANGED";

export const SHOW_TOAST = "SHOW_TOAST";

export const hashChanged = hash => {
  return dispatch => {
    console.log("hashChanged action");
    socket.emit(HASH_CHANGED, { hash }, response => {
      if (response.status === "error") {
        console.log("hashChanged client callback error");
        dispatch(showToast(true, response.message));
      } else if (response.status === "success") {
        console.log("hashChanged client callback success");
        dispatch(showToast(false, ""));
        dispatch(connectPlayer(response.playerName));
        dispatch(joinRoom(response.roomName));
      }
    });
  };
};

export const showToast = (show, message) => ({
  type: SHOW_TOAST,
  show,
  message
});
