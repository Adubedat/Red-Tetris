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

const playerNameValidation = playerName => {
  return isAlphaNumeric(playerName) && playerName.length <= 12;
};

const joinLobby = (player, socket, io) => {
  socket.join(LOBBY_ROOM);
  io.to(LOBBY_ROOM).emit(ADD_CHAT_MESSAGE, {
    message: {
      type: "notification",
      text: player.name + " joined Lobby."
    }
  });
  io.to(LOBBY_ROOM).emit(UPDATE_PLAYERS_LIST, {
    players: Game.players
      .filter(player => player.room === null)
      .map(player => player.name)
  });
};

export const updatePlayerClientSide = (player, io) => {
  io.in(player.id).emit(UPDATE_PLAYER, {
    player: player.toObject()
  });
};

export const connectPlayer = (playerName, socket, io) => {
  console.log("[CALL] connectPlayer");
  if (playerNameValidation(playerName)) {
    const player = Game.findPlayer(socket.id);
    if (!player) {
      const player = Game.addPlayer(new Player(playerName, socket.id));
      joinLobby(player, socket, io);
      updatePlayerClientSide(player, io);
      console.log("[UPDATED] after connectPlayer", Game);
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
