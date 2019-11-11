import Game from "./class";
import { UPDATE_ROOMS } from "../../constants/constants";
import { updateRoomClientSide } from "../room/controller";

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const handleInterval = (room, io) => {
  if (room.playersCount === 1 || room.stillInGameCounter === 1) {
    room.endGame();
  } else {
    room.players.forEach(player => {
      if (!player.piece.moveDown(player.heap)) {
        if (player.piece.isOverTheHeap()) player.gameOver();
        player.updateHeap();
      }
    });
  }
  updateRoomClientSide(room, io);
};

export const startGame = (room, io) => {
  if (room.isStarted) return;
  room.newGame();
  updateRoomClientSide(room, io);
  room.interval = setInterval(() => handleInterval(room, io), 1000);
};
