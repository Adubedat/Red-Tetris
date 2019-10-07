import Game from "./class";
import { UPDATE_ROOMS } from "../../constants/constants";
import { updatePlayerClientSide } from "../player/controller";
import { updateRoomClientSide, emitSpectres } from "../room/controller";

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const handleInterval = (room, io) => {
  room.players.forEach(player => {
    if (player.inGame && !player.piece.moveDown(player.heap)) {
      player.updateHeap();
      emitSpectres(player.room, io);
    }
    updatePlayerClientSide(player, io);
  });
};

export const startGame = (room, io) => {
  if (room.isStarted) return;
  room.isStarted = true;
  room.stillInGameCounter = room.players.length;
  room.initSpectres();
  room.players.forEach(player => {
    player.newPiece();
    player.inGame = true;
    updatePlayerClientSide(player, io);
  });
  room.interval = setInterval(() => handleInterval(room, io), 1000);
  updateRoomClientSide(room, io);
};
