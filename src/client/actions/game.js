import socket from "../services/socket-api";
import {
  KEY_PRESSED,
  UPDATE_SPECTRES,
  UPDATE_GAME_MODE
} from "../../constants/actionTypes";

export const handleKeyPress = e => {
  socket.emit(KEY_PRESSED, { code: e.code });
};

export const updateSpectres = spectres => ({
  type: UPDATE_SPECTRES,
  spectres
});

export const updateGameMode = mode => {
  return () => {
    socket.emit(UPDATE_GAME_MODE, mode);
  };
};
