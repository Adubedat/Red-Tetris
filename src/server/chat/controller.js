import Game from "../game/class";
import {
  LOBBY_ROOM,
  ADD_CHAT_MESSAGE,
  UPDATE_PLAYERS_LIST
} from "../../constants/constants";

export const updateChatClientSide = (roomLeft, roomJoined, playerName, io) => {
  io.to(roomLeft).emit(ADD_CHAT_MESSAGE, {
    message: { type: "notification", text: playerName + " left the room." }
  });
  io.to(roomJoined).emit(ADD_CHAT_MESSAGE, {
    message: { type: "notification", text: playerName + " joined the room." }
  });
};

export const newChatMessage = (message, socket, io) => {
  const player = Game.findPlayer(socket.id);
  if (!player) return;
  io.in(player.room || LOBBY_ROOM).emit(ADD_CHAT_MESSAGE, {
    message: {
      type: "message",
      author: player.name,
      text: message
    }
  });
};

export const updatePlayersList = (room, io) => {
  io.to(room.name).emit(UPDATE_PLAYERS_LIST, {
    players: room.players.map(player => player.name)
  });
  io.to(LOBBY_ROOM).emit(UPDATE_PLAYERS_LIST, {
    players: Game.players
      .filter(player => player.room === null)
      .map(player => player.name)
  });
};
