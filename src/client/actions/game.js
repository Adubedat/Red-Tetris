import socket from "../services/socket-api";
import {
  KEY_PRESSED,
  START_GAME,
  UPDATE_SPECTRES
} from "../../constants/constants";

export const handleKeyPress = e => {
  socket.emit(KEY_PRESSED, { code: e.code });
};

export const startGame = () => {
  return () => {
    socket.emit(START_GAME);
  };
};

export const updateSpectres = spectres => ({
  type: UPDATE_SPECTRES,
  spectres
});
