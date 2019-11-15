import Game from "../game/class";
import Room from "./class";
import { isAlphaNumeric } from "../../utils/utils";
import {
  updatePlayerClientSide,
  updatePlayersClientSide
} from "../player/controller";
import { updateChatClientSide, updatePlayersList } from "../chat/controller";
import {
  LOBBY_ROOM,
  UPDATE_ROOM,
  UPDATE_ROOMS,
  UPDATE_SPECTRES,
  SOLO,
  DISPLAY_TOAST
} from "../../constants/constants";

const roomNameValidation = roomName => {
  return isAlphaNumeric(roomName) && roomName.length <= 12;
};

const createNewRoom = (roomName, player) => {
  const room = new Room(roomName);
  player.isHost = true;
  Game.addRoom(room);
  return room;
};

const addPlayerToRoom = (player, room) => {
  room.addPlayer(player);
  player.room = room;
};

export const updateGameMode = (mode, socket, io) => {
  const player = Game.findPlayer(socket.id);
  if (mode === SOLO && player.room.playersCount > 1) return;
  if (player && player.room && player.isHost && !player.room.isStarted) {
    player.room.mode = mode;
  }
  updateRoomClientSide(player.room, io);
};

export const updateSpectresClientSide = (room, io) => {
  const players = room.players;
  players.forEach(player => {
    let spectres = room.spectres.map(s => ({ ...s }));
    spectres = spectres.filter(spectre => spectre.playerId !== player.id);
    spectres.forEach(spectre => delete spectre.playerId);
    io.in(player.id).emit(UPDATE_SPECTRES, { spectres });
  });
};

export const updateRoomClientSide = (room, io) => {
  updateSpectresClientSide(room, io);
  io.in(room.name).emit(UPDATE_ROOM, {
    room: room.toObject()
  });
  updatePlayersClientSide(room.players, io);
  io.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const transferPlayerToRoom = (room, player, io, socket) => {
  socket.leave(LOBBY_ROOM);
  socket.join(room.name);
  player.clean();
  updatePlayerClientSide(player, io);
  updateRoomClientSide(room, io);
  updateChatClientSide(LOBBY_ROOM, room.name, player.name, io);
  updatePlayersList(room, io);
};

export const joinRoom = (roomName, socket, io) => {
  console.log("[CALL] joinRoom");
  if (roomNameValidation(roomName)) {
    const player = Game.findPlayer(socket.id);
    if (player && !player.room) {
      let room = Game.findRoom(roomName);
      if (!room) room = createNewRoom(roomName, player);
      if (room.isFull()) {
        const data = { type: "error", message: "This room is full" };
        socket.emit(DISPLAY_TOAST, data);
        return;
      }
      addPlayerToRoom(player, room);
      transferPlayerToRoom(room, player, io, socket);
      console.log("[UPDATED] after joinRoom", Game);
    }
  }
};

const transferPlayerToLobby = (room, player, io, socket) => {
  socket.leave(room.name);
  socket.join(LOBBY_ROOM);
  player.clean();
  updatePlayerClientSide(player, io);
  updateRoomClientSide(room, io);
  updateChatClientSide(room.name, LOBBY_ROOM, player.name, io);
  updatePlayersList(room, io);
};

export const leaveRoom = (socket, io) => {
  console.log("[CALL] leaveRoom on : ");
  const player = Game.findPlayer(socket.id);
  if (player && player.room) {
    const room = player.room;
    if (room.playersCount > 1) {
      room.removePlayer(player.id);
      if (player.isHost) {
        player.isHost = false;
        room.updateHost();
      }
      if (player.inGame) {
        room.stillInGameCounter -= 1;
      }
      room.checkEndGame();
    } else {
      player.isHost = false;
      room.clean();
      Game.removeRoom(room.name);
    }
    player.room = null;
    transferPlayerToLobby(room, player, io, socket);
    console.log("[UPDATED] after leaveRoom", Game);
  }
};
