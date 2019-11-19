import { initClientState } from "../game/controller";
import { connectPlayer, disconnectPlayer } from "../player/controller";
import { joinRoom, leaveRoom, updateGameMode } from "../room/controller";
import { newChatMessage } from "../chat/controller";
import { onKeyPressed } from "../piece/controller";
import {
  LEAVE_ROOM,
  CONNECTION,
  DISCONNECT_PLAYER,
  NEW_PLAYER,
  JOIN_ROOM,
  DISCONNECT,
  KEY_PRESSED,
  LOBBY_ROOM,
  NEW_CHAT_MESSAGE,
  UPDATE_GAME_MODE
} from "../../constants/actionTypes";

import { LOG_LINE } from "../../constants/others";
/*
 The server listens to every new client connecting and processes all its events.
*/

export const initListeners = io => {
  io.on(CONNECTION, socket => {
    initClientState(io);
    socket.join(LOBBY_ROOM);
    socket.on(NEW_PLAYER, data => {
      console.log("[EVENT] ", NEW_PLAYER);
      connectPlayer(data, socket, io);
    });
    socket.on(JOIN_ROOM, data => {
      console.log("[EVENT] ", JOIN_ROOM);
      joinRoom(data, socket, io);
    });
    socket.on(DISCONNECT_PLAYER, () => {
      console.log("[EVENT] ", DISCONNECT_PLAYER);
      disconnectPlayer(socket, io);
    });
    socket.on(LEAVE_ROOM, () => {
      console.log("[EVENT] ", LEAVE_ROOM);
      leaveRoom(socket, io);
    });
    socket.on(KEY_PRESSED, data => {
      onKeyPressed(data.code, socket, io);
    });
    socket.on(NEW_CHAT_MESSAGE, message => {
      newChatMessage(message, socket, io);
    });
    socket.on(UPDATE_GAME_MODE, mode => {
      updateGameMode(mode, socket, io);
    });
    socket.on(DISCONNECT, reason => {
      console.log(LOG_LINE, "[EVENT] DISCONNECT :", reason);
      disconnectPlayer(socket, io);
    });
  });
};
