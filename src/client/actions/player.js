import socket from "../services/socket-api";

export const NEW_PLAYER = "NEW_PLAYER";

export const CONNECT_PLAYER = "CONNECT_PLAYER";

export const PLAYER_NAME_ERROR = "PLAYER_NAME_ERROR";

export const newPlayer = playerName => {
  return dispatch => {
    socket.emit(NEW_PLAYER, { playerName }, status => {
      if (status === "success") {
        dispatch(connectPlayer(playerName));
        dispatch(playerNameError(false));
      } else if (status === "error") {
        dispatch(playerNameError(true));
      }
    });
  };
};

export const connectPlayer = playerName => ({
  type: CONNECT_PLAYER,
  playerName,
  currentRoom: "Lobby"
});

export const playerNameError = error => ({
  type: PLAYER_NAME_ERROR,
  error
});
