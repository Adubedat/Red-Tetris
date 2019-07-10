import { connectPlayer } from "./player";
import { joinRoom } from "./room";
import { toast } from "react-toastify";
import socket from "../services/socket-api";
import {
  KEY_PRESSED,
  UPDATE_BOARD,
  START_GAME,
  UPDATE_SPECTRES
} from "../../constants/actionTypes";

const checkHash = () => {
  const hash = window.location.hash.substr(1);
  if (!hash.trim()) return;
  const regexp = /^[a-zA-Z0-9]{1,12}\[[a-zA-Z0-9]{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    toast.error(
      "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length"
    );
    return null;
  }
  const [roomName, playerName] = hash.match(/\w{1,12}/g);
  return {
    playerName,
    roomName
  };
};

export const handleHash = dispatch => {
  const data = checkHash();
  if (!data) return;
  dispatch(connectPlayer(data.playerName));
  dispatch(joinRoom(data.roomName));
};

export const handleKeyPress = e => {
  socket.emit(KEY_PRESSED, { code: e.code });
};

export const startGame = () => {
  return () => {
    socket.emit(START_GAME);
  };
};

export const updateBoard = board => ({
  type: UPDATE_BOARD,
  board
});

export const updateSpectres = spectres => ({
  type: UPDATE_SPECTRES,
  spectres
});
