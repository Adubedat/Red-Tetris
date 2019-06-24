import socket from "../services/socket-api";
import { connectPlayer } from "./player";
import { joinRoom } from "./room";
import { HANDLE_HASH } from "../../constants/constants";
import { toast } from "react-toastify";

const checkHash = () => {
  const hash = window.location.hash.substr(1);
  if (!hash.trim()) return;
  const regexp = /^[a-z0-9]{1,12}\[[a-z0-9]{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    console.log("[ERROR] hash parameters are invalid");
    return null;
  }
  console.log("[SUCCESS] hash parameters are valid");
  const [roomName, playerName] = hash.match(/\w{1,12}/g);
  return {
    playerName,
    roomName
  };
};

export const handleHash = dispatch => {
  const gameInfo = checkHash();
  if (!gameInfo) return;
  socket.emit(HANDLE_HASH, { gameInfo }, response => {
    if (response.status === "success") {
      if (response.newPlayer) dispatch(connectPlayer(gameInfo.playerName));
      if (response.joinRoom) dispatch(joinRoom(gameInfo.roomName));
    } else {
      toast.error(response.message);
    }
  });
};
