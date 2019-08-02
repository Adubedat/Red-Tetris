import Game from "../game/class";
import Player from "./class";
import { leaveRoom } from "../room/controller";
import { isAlphaNumeric } from "../../utils/utils";
import {
  LOBBY_ROOM,
  UPDATE_PLAYER,
  UPDATE_PLAYERS_LIST,
  ADD_CHAT_MESSAGE
} from "../../constants/constants";

export const connectPlayer = (playerName, callback, socket, io) => {
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
      socket.join(LOBBY_ROOM);
      updatePlayer(player, io);
      io.to(LOBBY_ROOM).emit(ADD_CHAT_MESSAGE, {
        message: {
          type: "notification",
          text: player.name + " joined the room."
        }
      });
      io.to(LOBBY_ROOM).emit(UPDATE_PLAYERS_LIST, {
        players: Game.players
          .filter(player => player.room === null)
          .map(player => player.name)
      });
      // const playerInfo = player.toObject();
      // callback({ status: "success", playerInfo });
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

export const updatePlayer = (player, io) => {
  io.in(player.id).emit(UPDATE_PLAYER, {
    player: player.toObject()
  });
};
