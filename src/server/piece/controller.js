import Game from "../game/class";
import { startGame, emitSpectres } from "../room/controller";
import { enumKeys, KEY_PRESSED } from "../../constants/constants";
import { updatePlayer } from "../player/controller";

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
        handleArrowDown(player, heap, io);
        break;
      case enumKeys.ARROW_UP:
        player.piece.rotate(heap);
        break;
      case enumKeys.SPACE:
        handleSpace(player, io);
        break;
      default:
        break;
    }
    updatePlayer(player, io);
  } else if (player.isHost && code === enumKeys.ENTER) {
    startGame(player.room, io);
  }
};

const handleSpace = (player, io) => {
  player.piece.hardDrop();
  player.updateHeap();
  emitSpectres(player.room, io);
};

const handleArrowDown = (player, heap, io) => {
  if (!player.piece.moveDown(heap)) {
    player.updateHeap();
    emitSpectres(player.room, io);
  }
};
