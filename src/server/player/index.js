import Game from "../game/class";
import Player from "../player/class";
import { leaveRoom } from "../room";
import { isAlphaNumeric } from "../../utils/utils";
import { LOBBY_ROOM } from "../../constants/constants";

export const connectPlayer = (playerName, callback, socket) => {
  console.log("[CALL] connectPlayer");
  if (!isAlphaNumeric(playerName) || playerName.length > 12) {
    callback({
      status: "error",
      message: "Player name must be 1 to 12 alphanumeric characters long"
    });
  } else {
    const player = Game.findPlayer(socket.id);
    if (!player) {
      const player = Game.addPlayer(new Player(playerName, socket.id));
      const playerInfo = player.createPublicPlayerObject();
      callback({ status: "success", playerInfo });
      console.log("[UPDATED] after connectPlayer", Game);
      return player;
    }
  }
};

export const disconnectPlayer = (socket, io) => {
  console.log("[CALL] disconnectPlayer on : ", socket.id);
  leaveRoom(socket, io);
  Game.removePlayer(socket.id);
  socket.leave(LOBBY_ROOM);
  console.log("[UPDATED] after disconnectPlayer", Game);
};
