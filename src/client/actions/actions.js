import { connectPlayer } from "./player";
import { joinRoom } from "./room";
import { toast } from "react-toastify";

const checkHash = () => {
  const hash = window.location.hash.substr(1);
  if (!hash.trim()) return;
  const regexp = /^[a-z0-9]{1,12}\[[a-z0-9]{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    toast.error("[ERROR] hash parameters are invalid");
    return null;
  }
  toast("[SUCCESS] hash parameters are valid");
  const [roomName, playerName] = hash.match(/\w{1,12}/g);
  return {
    playerName,
    roomName
  };
};

export const handleHash = dispatch => {
  const gameInfo = checkHash();
  if (!gameInfo) return;
  dispatch(connectPlayer(gameInfo.playerName));
  dispatch(joinRoom(gameInfo.roomName));
};
