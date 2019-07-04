import { initClientState } from "../game/controller";
import { connectPlayer, disconnectPlayer } from "../player/controller";
import { joinRoom, leaveRoom, startGame } from "../room/controller";
import { onKeyPressed } from "../piece/controller";
import {
  LEAVE_ROOM,
  CONNECTION,
  DISCONNECT_PLAYER,
  NEW_PLAYER,
  JOIN_ROOM,
  START_GAME,
  DISCONNECT,
  LOG_LINE,
  KEY_PRESSED,
  LOBBY_ROOM
} from "../../constants/constants";

export const initListeners = io => {
  io.on(CONNECTION, socket => {
    initClientState(socket);
    socket.join(LOBBY_ROOM);
    // console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    socket.on(NEW_PLAYER, (data, callback) => {
      console.log("[EVENT] ", NEW_PLAYER);
      connectPlayer(data, callback, socket);
    });
    socket.on(JOIN_ROOM, (data, callback) => {
      console.log("[EVENT] ", JOIN_ROOM);
      joinRoom(data, callback, socket, io);
      // console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    });
    socket.on(DISCONNECT_PLAYER, () => {
      console.log("[EVENT] ", DISCONNECT_PLAYER);
      disconnectPlayer(socket, io);
    });
    socket.on(LEAVE_ROOM, () => {
      console.log("[EVENT] ", LEAVE_ROOM);
      leaveRoom(socket, io);
      // console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    });
    socket.on(START_GAME, () => startGame(socket, io));
    socket.on(KEY_PRESSED, data => {
      onKeyPressed(data, socket, io);
    });
    socket.on(DISCONNECT, reason => {
      console.log(LOG_LINE, "[EVENT] DISCONNECT :", reason);
      disconnectPlayer(socket, io);
    });
  });
};
