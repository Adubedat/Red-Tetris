import Game from "./class";
import Timer from "../timer/class";
import { UPDATE_GAME, DISPLAY_TOAST } from "../../constants/actionTypes";
import { BATTLEROYAL } from "../../constants/game";
import { updateRoomClientSide } from "../room/controller";
import { getHighScoresFromDb } from "../../database";

export const initClientState = async io => {
  await getHighScoresFromDb();
  updateGameClientSide(io);
};

const handleInterval = (room, io) => {
  room.players.forEach(player => {
    if (player.inGame) {
      if (!player.piece.moveDown(player.heap)) {
        player.updateHeap();
      }
    }
  });
  updateRoomClientSide(room, io);
};

export const startGame = (room, io, socket) => {
  if (room.isStarted) return;
  if (room.mode === BATTLEROYAL && room.playersCount <= 1) {
    socket.emit(DISPLAY_TOAST, {
      type: "error",
      message: "Not enough players"
    });
    return;
  }
  room.newGame();
  updateRoomClientSide(room, io);
  room.timer = new Timer(() => handleInterval(room, io), room.speed);
  room.timer.start();
};

export const updateGameClientSide = io => {
  io.emit(UPDATE_GAME, { game: Game.toObject() });
};
