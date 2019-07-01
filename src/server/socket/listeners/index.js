import Game from "../../components/Game";
import Player from "../../components/Player";
import Room from "../../components/Room";
import { isAlphaNumeric } from "../../../utils/utils";
import {
  LEAVE_ROOM,
  UPDATE_ROOM,
  CONNECTION,
  DISCONNECT_PLAYER,
  NEW_PLAYER,
  JOIN_ROOM,
  UPDATE_ROOMS,
  UPDATE_PLAYERS,
  DISCONNECT,
  LOG_LINE,
  KEY_PRESSED,
  enumKeys,
  LOBBY_ROOM
} from "../../../constants/constants";

export const initListeners = io => {
  io.on(CONNECTION, socket => {
    initClientState(socket);
    socket.join(LOBBY_ROOM);
    console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    socket.on(NEW_PLAYER, (data, callback) => {
      console.log("[EVENT] ", NEW_PLAYER);
      connectPlayer(data, callback, socket);
    });
    socket.on(JOIN_ROOM, (data, callback) => {
      console.log("[EVENT] ", JOIN_ROOM);
      joinRoom(data, callback, socket, io);
      console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    });
    socket.on(DISCONNECT_PLAYER, () => {
      console.log("[EVENT] ", DISCONNECT_PLAYER);
      disconnectPlayer(socket, io);
    });
    socket.on(LEAVE_ROOM, () => {
      console.log("[EVENT] ", LEAVE_ROOM);
      leaveRoom(socket, io);
      console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    });
    socket.on(KEY_PRESSED, (data, callback) => {
      console.log("[EVENT] ", KEY_PRESSED, data);
      // callback({ status: "success" });
      onKeyPressed(data, callback, socket, io);
      // console.log("[JOIN] socket room : ", io.sockets.adapter.rooms);
    });
    socket.on(DISCONNECT, reason => {
      console.log(LOG_LINE, "[EVENT] DISCONNECT :", reason);
      disconnectPlayer(socket, io);
    });
  });
};

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const onKeyPressed = (code, callback, socket, io) => {
  if (!Object.values(enumKeys).includes(code)) return;
  const player = Game.findPlayer(socket.id);
  if (player && player.room) {
    switch (code) {
      case enumKeys.ARROW_LEFT:
        // console.log(ARROW_LEFT);
        break;
      case enumKeys.ARROW_RIGHT:
        // console.log(ARROW_RIGHT);
        break;
      case enumKeys.ARROW_DOWN:
        movePieceDown(player);
        callback({ status: "success", data: player.board });
        // console.log(ARROW_DOWN);
        break;
      case enumKeys.ARROW_UP:
        // console.log(ARROW_UP);
        break;
      case enumKeys.SPACE:
        // console.log(SPACE);
        break;

      default:
        break;
    }
    io.in(player.room.name).emit(UPDATE_PLAYERS, {
      players: player.room.createPublicPlayersArray()
    });
  }
};

const movePieceDown = player => {
  player.setBoardAtIndex(4, 1);
};

const joinRoom = (roomName, callback, socket, io) => {
  console.log("[CALL] joinRoom");
  if (!isAlphaNumeric(roomName) || roomName.length > 12) {
    callback({
      status: "error",
      message: "Room name must be 1 to 12 alphanumeric characters long"
    });
  } else {
    const player = Game.findPlayer(socket.id);
    if (player && !player.room) {
      let room = Game.findRoom(roomName);
      if (!room) {
        room = new Room(roomName, player.id);
        Game.addRoom(room);
      }
      if (room && !room.isFull()) {
        room.addPlayer(player);
        player.room = room;
        socket.leave(LOBBY_ROOM);
        socket.join(room.name);
        io.in(room.name).emit(UPDATE_ROOM, {
          room: room.createPublicRoomObject()
        });
        io.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
        callback({ status: "success" });
        // console.log(room);
      } else {
        callback({ status: "error", message: "Room is full" });
      }
      console.log("[UPDATED] after joinRoom", Game);
    }
    callback({ status: "error", message: "Socket problem" });
  }
};

const leaveRoom = (socket, io) => {
  console.log("[CALL] leaveRoom on : ");
  const player = Game.findPlayer(socket.id);
  if (!player) return;
  const room = player.room;
  if (!room) return;
  // console.log(room);
  if (room.playersCount > 1) {
    room.removePlayer(player.id);
    if (player.id === room.hostId) {
      room.updateHostId();
    }
  } else {
    Game.removeRoom(room.name);
  }
  player.room = null;
  socket.leave(room.name);
  socket.join(LOBBY_ROOM);
  io.in(room.name).emit(UPDATE_ROOM, {
    room: room.createPublicRoomObject()
  });
  io.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
  console.log("[UPDATED] after leaveRoom", Game);
};

const connectPlayer = (playerName, callback, socket) => {
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
      // console.log(player);
      const playerInfo = player.createPublicPlayerObject();
      callback({ status: "success", playerInfo });
      console.log("[UPDATED] after connectPlayer", Game);
      return player;
    }
  }
};

const disconnectPlayer = (socket, io) => {
  console.log("[CALL] disconnectPlayer on : ", socket.id);
  leaveRoom(socket, io);
  Game.removePlayer(socket.id);
  socket.leave(LOBBY_ROOM);
  console.log("[UPDATED] after disconnectPlayer", Game);
};
