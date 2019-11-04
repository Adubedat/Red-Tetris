import Game from "./class";
import { UPDATE_ROOMS } from "../../constants/constants";
import { updatePlayerClientSide } from "../player/controller";
import {
  updateRoomClientSide,
  updateSpectresClientSide
} from "../room/controller";

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const handleInterval = (room, io) => {
  if (room.playersCount === 1 || room.stillInGameCounter === 1) {
    room.endGame();
    updateRoomClientSide(room, io);
  }
  room.players.forEach(player => {
    if (player.inGame && !player.piece.moveDown(player.heap)) {
      player.updateHeap();
      updateSpectresClientSide(player.room, io);
    }
    updatePlayerClientSide(player, io);
  });
};

export const startGame = (room, io) => {
  if (room.isStarted) return;
  room.clean();
  room.extendPiecesList();
  room.isStarted = true;
  room.isGameOver = false;
  room.stillInGameCounter = room.players.length;
  room.initSpectres();
  updateSpectresClientSide(room, io);
  room.players.forEach(player => {
    player.newPiece();
    player.inGame = true;
    updatePlayerClientSide(player, io);
  });
  room.interval = setInterval(() => handleInterval(room, io), 1000);
  updateRoomClientSide(room, io);
};
