import Game from "../game/class";
import {
  UPDATE_PLAYERS,
  enumKeys,
  KEY_PRESSED
} from "../../constants/constants";

export const onKeyPressed = (code, socket, io) => {
  if (!Object.values(enumKeys).includes(code)) return;
  console.log("[EVENT] ", KEY_PRESSED, code);
  const player = Game.findPlayer(socket.id);
  if (player && player.room) {
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
        break;
      case enumKeys.SPACE:
        break;
      default:
        break;
    }
    player.updateBoard();
    io.in(player.room.name).emit(UPDATE_PLAYERS, {
      players: player.room.createPublicPlayersArray()
    });
  }
};
