import { connectPlayer } from "./player";
import { joinRoom } from "./room";
import { toast } from "react-toastify";

/*

handle hash errors and extract playerName and roomName from it

*/

export const checkHash = () => {
  const hash = window.location.hash.substr(1);
  if (!hash.trim()) return;
  const regexp = /^[a-zA-Z0-9]{1,12}\[[a-zA-Z0-9]{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    toast.error(
      "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length"
    );
    return;
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
