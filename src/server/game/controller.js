import Game from "./class";
import { UPDATE_ROOMS, SOLO, BATTLEROYAL } from "../../constants/constants";
import { updateRoomClientSide } from "../room/controller";

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(UPDATE_ROOMS, { rooms: Game.createPublicRoomsArray() });
};

const checkEndGame = room => {
  switch (room.mode) {
    case SOLO:
      if (room.playersCount === 0 || room.stillInGameCounter === 0) {
        return true;
      }
      break;
    case BATTLEROYAL:
      if (room.playersCount === 1 || room.stillInGameCounter === 1) {
        return true;
      }
      break;
    default:
      return false;
  }
  return false;
};

const handleInterval = (room, io) => {
  if (checkEndGame(room)) {
    room.endGame();
  } else {
    room.players.forEach(player => {
      if (!player.piece.moveDown(player.heap)) {
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
