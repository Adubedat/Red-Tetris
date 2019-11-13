import Game from "./class";
import Timer from "../timer/class";
import { UPDATE_ROOMS } from "../../constants/constants";
import { updateRoomClientSide } from "../room/controller";

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const handleInterval = (room, io) => {
  room.players.forEach(player => {
    if (!player.piece.moveDown(player.heap)) {
      player.updateHeap();
    }
  });
  updateRoomClientSide(room, io);
};

export const startGame = (room, io) => {
  if (room.isStarted) return;
  room.newGame();
  updateRoomClientSide(room, io);
  room.timer = new Timer(() => handleInterval(room, io), room.speed);
  room.timer.start();
};
