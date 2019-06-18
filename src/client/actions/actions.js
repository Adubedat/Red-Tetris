import socket from "../services/socket-api";

export const HASH_CHANGED = "HASH_CHANGED";

export const hashChanged = (hash, playerName) => {
  return dispatch => {
    socket.emit(HASH_CHANGED, { hash, playerName }, status => {
      console.log(status);
    });
  };
};
