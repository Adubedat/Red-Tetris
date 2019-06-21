import socket from "../services/socket-api";
import { connectPlayer } from "./player";
import { joinRoom } from "./room";
import { HANDLE_HASH } from "../../constants/constants";

const checkHash = () => {
  const hash = window.location.hash.substr(1);
  if (!hash.trim()) return;
  // return hash;
  // return { playerName: "jojo", roomName: "bar" };
  const regexp = /^[a-z0-9]{1,12}\[[a-z0-9]{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    console.log("hash error");
    return null;
    //     callback({
    //       status: "error",
    //       message:
    //         "Hash parameters are invalid. #room[playerName] format expected with max 12 alphanumeric characters for each field"
    //     });
  }
  console.log("hash success");
  const [roomName, playerName] = hash.match(/\w{1,12}/g);
  return {
    playerName,
    roomName
  };
};

export const handleHash = () => {
  return dispatch => {
    console.log("[TEST] callback HANDLE_HASH");
    const gameInfo = checkHash();
    if (!gameInfo) return;
    socket.emit(HANDLE_HASH, { gameInfo }, response => {
      if (response.status === "success") {
        console.log("[SUCCESS] callback HANDLE_HASH");
        dispatch(connectPlayer(gameInfo.playerName));
        dispatch(joinRoom(gameInfo.roomName));
      }
    });
  };
};
