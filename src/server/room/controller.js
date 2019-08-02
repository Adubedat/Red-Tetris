import Game from "../game/class";
import Room from "./class";
import { isAlphaNumeric } from "../../utils/utils";
import {
  LOBBY_ROOM,
  UPDATE_ROOM,
  UPDATE_ROOMS,
  UPDATE_SPECTRES,
  ADD_CHAT_MESSAGE,
  UPDATE_PLAYERS_LIST
} from "../../constants/constants";
import { updatePlayer } from "../player/controller";

export const joinRoom = (roomName, callback, socket, io) => {
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
        changeRoom(LOBBY_ROOM, room.name, room, player, io, socket);
      } else {
        callback({ status: "error", message: "Room is full" });
      }
      console.log("[UPDATED] after joinRoom", Game);
    }
    callback({ status: "error", message: "Socket problem" });
  }
};

export const leaveRoom = (socket, io) => {
  console.log("[CALL] leaveRoom on : ");
  const player = Game.findPlayer(socket.id);
  if (player && player.room) {
    const room = player.room;
    if (room.playersCount > 1) {
      room.removePlayer(player.id);
      if (player.id === room.hostId) {
        room.updateHostId();
      }
    } else {
      room.clean();
      Game.removeRoom(room.name);
    }
    player.room = null;
    changeRoom(room.name, LOBBY_ROOM, room, player, io, socket);
    console.log("[UPDATED] after leaveRoom", Game);
  }
};

const changeRoom = (srcName, destName, room, player, io, socket) => {
  player.clean();
  socket.leave(srcName);
  socket.join(destName);
  updateRoom(room, io);
  updatePlayer(player, io);
  emitSpectres(room, io);
  io.to(srcName).emit(ADD_CHAT_MESSAGE, {
    message: { type: "notification", text: player.name + " left the room." }
  });
  io.to(destName).emit(ADD_CHAT_MESSAGE, {
    message: { type: "notification", text: player.name + " joined the room." }
  });
  io.to(room.name).emit(UPDATE_PLAYERS_LIST, {
    players: room.players.map(player => player.name)
  });
  io.to(LOBBY_ROOM).emit(UPDATE_PLAYERS_LIST, {
    players: Game.players
      .filter(player => player.room === null)
      .map(player => player.name)
  });
};

const handleInterval = (room, io) => {
  room.players.forEach(player => {
    if (player.inGame && !player.piece.moveDown(player.heap)) {
      player.updateHeap();
      emitSpectres(player.room, io);
    }
    updatePlayer(player, io);
  });
};

export const startGame = (room, io) => {
  if (room.isStarted) return;
  room.isStarted = true;
  room.stillInGameCounter = room.players.length;
  room.initSpectres();
  emitSpectres(room, io);
  room.players.forEach(player => {
    player.newPiece();
    player.inGame = true;
    updatePlayer(player, io);
  });
  room.interval = setInterval(() => handleInterval(room, io), 1000);
  updateRoom(room, io);
};
export const emitSpectres = (room, io) => {
  const players = room.players;
  players.forEach(player => {
    let spectres = room.spectres.map(s => ({ ...s }));
    spectres = spectres.filter(spectre => spectre.playerId !== player.id);
    spectres.forEach(spectre => delete spectre.playerId);
    io.in(player.id).emit(UPDATE_SPECTRES, { spectres });
  });
};

export const updateRoom = (room, io) => {
  io.in(room.name).emit(UPDATE_ROOM, {
    room: room.toObject()
  });
  io.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};
