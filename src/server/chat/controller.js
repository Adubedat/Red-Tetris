import Game from "../game/class";
import {
  LOBBY_ROOM,
  ADD_CHAT_MESSAGE,
  UPDATE_PLAYERS_LIST
} from "../../constants/actionTypes";
import { GREEN_CHAT, RED_CHAT } from "../../constants/colors";

export const updateChatClientSide = (roomLeft, roomJoined, playerName, io) => {
  io.to(roomLeft).emit(ADD_CHAT_MESSAGE, {
    message: {
      type: "notification",
      color: RED_CHAT,
      text:
        playerName +
        " left " +
        (roomLeft === LOBBY_ROOM ? "Lobby" : roomLeft) +
        "."
    }
  });
  io.to(roomJoined).emit(ADD_CHAT_MESSAGE, {
    message: {
      type: "notification",
      color: GREEN_CHAT,
      text:
        playerName +
        " joined " +
        (roomJoined === LOBBY_ROOM ? "Lobby" : roomJoined) +
        "."
    }
  });
};

export const newChatMessage = (message, socket, io) => {
  const player = Game.findPlayer(socket.id);
  if (!player) return;
  const destRoom = player.room ? player.room.name : LOBBY_ROOM;
  io.in(destRoom).emit(ADD_CHAT_MESSAGE, {
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
