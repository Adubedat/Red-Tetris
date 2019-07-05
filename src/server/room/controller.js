import Game from "../game/class";
import Room from "./class";
import { isAlphaNumeric } from "../../utils/utils";
import {
  LOBBY_ROOM,
  UPDATE_ROOM,
  UPDATE_ROOMS,
  UPDATE_PLAYERS
} from "../../constants/constants";
import { isTSExpressionWithTypeArguments } from "@babel/types";

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
        socket.leave(LOBBY_ROOM);
        socket.join(room.name);
        io.in(room.name).emit(UPDATE_ROOM, {
          room: room.toObject()
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
    player.clean();
    io.in(room.name).emit(UPDATE_PLAYERS, {
      players: room.createPublicPlayersArray()
    });
    socket.leave(room.name);
    socket.join(LOBBY_ROOM);
    io.in(room.name).emit(UPDATE_ROOM, {
      room: room.toObject()
    });
    io.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
    console.log("[UPDATED] after leaveRoom", Game);
  }
};

const updateClient = (room, io) => {
  room.players.forEach(player => {
    player.updateBoard();
  });
  io.in(room.name).emit(UPDATE_PLAYERS, {
    players: room.createPublicPlayersArray()
  });
};

const handleInterval = (room, io) => {
  room.players.forEach(player => {
    if (!player.piece.moveDown(player.heap)) {
      player.updateHeap();
    }
  });
  updateClient(room, io);
};

export const startGame = (socket, io) => {
  const room = Game.findPlayer(socket.id).room;
  if (room.isStarted) return;
  room.isStarted = true;
  room.players.forEach(player => player.newPiece());
  updateClient(room, io);
  room.interval = setInterval(() => handleInterval(room, io), 1000);
  console.log(room.interval);
};
