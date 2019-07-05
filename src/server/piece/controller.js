import Game from "../game/class";
import { startGame } from "../room/controller";
import {
  UPDATE_PLAYERS,
  enumKeys,
  KEY_PRESSED
} from "../../constants/constants";

export const onKeyPressed = (code, socket, io) => {
  const player = Game.findPlayer(socket.id);
  if (!Object.values(enumKeys).includes(code) || !(player && player.room))
    return;
  console.log("[EVENT] ", KEY_PRESSED, code);
  if (player.inGame) {
    const { heap } = player;
    switch (code) {
      case enumKeys.ARROW_LEFT:
        player.piece.moveLeft(heap);
        break;
      case enumKeys.ARROW_RIGHT:
        player.piece.moveRight(heap);
        break;
      case enumKeys.ARROW_DOWN:
        if (!player.piece.moveDown(heap)) {
          player.updateHeap();
        }
        break;
      case enumKeys.ARROW_UP:
        player.piece.rotate(heap);
        break;
      case enumKeys.SPACE:
        player.piece.hardDrop();
        player.updateHeap();
        break;
      default:
        break;
    }
    io.in(player.room.name).emit(UPDATE_PLAYERS, {
      players: player.room.createPublicPlayersArray()
    });
  } else if (player.id === player.room.hostId && code === enumKeys.ENTER) {
    startGame(player.room, io);
  }
};
