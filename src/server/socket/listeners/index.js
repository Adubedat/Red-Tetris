import Game from "../../components/Game";
import Player from "../../components/Player";
import Room from "../../components/Room";
import { isAlphaNumeric } from "../../../utils/utils";
import {
  LEAVE_ROOM,
  DISCONNECT_PLAYER,
  NEW_PLAYER,
  JOIN_ROOM,
  NEW_ROOM_LIST,
  SHOW_TOAST,
  DISCONNECT
} from "../../../constants/constants";

export const initListeners = io => {
  io.on("connection", socket => {
    initClientState(socket);
    socket.join("lobby");
    console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    socket.leave("lobby");
    console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    socket.on(NEW_PLAYER, (data, callback) => {
      console.log("[EVENT] ", NEW_PLAYER);
      connectPlayer(data, callback, socket);
    });
    socket.on(JOIN_ROOM, (data, callback) => {
      console.log("[EVENT] ", JOIN_ROOM);
      joinRoom(data, callback, socket);
    });
    socket.on(DISCONNECT_PLAYER, () => {
      console.log("[EVENT] ", DISCONNECT_PLAYER);
      disconnectPlayer(socket.id);
    });
    socket.on(LEAVE_ROOM, () => {
      console.log("[EVENT] ", LEAVE_ROOM);
      leaveRoom(socket);
    });
    socket.on(DISCONNECT, reason => {
      console.log("[EVENT] DISCONNECT :", reason);
      disconnectPlayer(socket.id);
    });
  });
};

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(NEW_ROOM_LIST, { roomList: Game.getRoomsName() });
};

const joinRoom = (roomName, callback, socket) => {
  console.log("[CALL] joinRoom");
  const player = Game.findPlayer(socket.id);
  if (player && !player.currentRoom) {
    const room = Game.findRoom(roomName);
    if (!room) {
      Game.addRoom(new Room(roomName, player.id), player);
    } else if (!room.isFull()) {
      room.addPlayer(player);
      player.currentRoom = room;
      socket.join(room.hostId);
    } else {
      callback({ status: "error", message: "Room is full" });
    }
    callback({ status: "success" });
  }
  callback({ status: "error", message: "Server problem" });
};

const leaveRoom = socket => {
  const player = Game.findPlayer(socket.id);
  if (!player) return;
  const room = player.currentRoom;
  console.log("[CALL] leaveRoom on : ", room);
  if (socket.id === room.hostId) {
    if (room.playerCount > 1) {
      room.removePlayer(player.id);
    } else {
      Game.removeRoom(room.hostId);
    }
  }
  player.currentRoom = null;
  socket.join("lobby");
};

const connectPlayer = (playerName, callback, socket) => {
  console.log("[CALL] connectPlayer");
  const player = Game.findPlayer(socket.id);
  if (!player) {
    if (!isAlphaNumeric(playerName) || playerName.length > 12) {
      socket.emit(SHOW_TOAST, {
        type: "error",
        message: "Player name must have 1 to 12 alphanumeric characters"
      });
    } else {
      const player = Game.addPlayer(new Player(playerName, socket.id));
      console.log(player);
      callback({ status: "success" });
      return player;
    }
  }
  callback({ status: "error" });
};

const disconnectPlayer = clientId => {
  const player = Game.findPlayer(clientId);
  console.log("[CALL] disconnectPlayer on : ", player);
  if (player) {
    if (player.currentRoom) {
      leaveRoom(player);
    }
    Game.removePlayer(clientId);
  }
  console.log(Game);
};
