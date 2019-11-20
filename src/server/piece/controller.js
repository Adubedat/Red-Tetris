import Game from "../game/class";
import { updateRoomClientSide } from "../room/controller";
import { startGame } from "../game/controller";
import { enumKeys } from "../../constants/keys";
import { updatePlayerClientSide } from "../player/controller";

export const onKeyPressed = (code, socket, io) => {
  const player = Game.findPlayer(socket.id);
  if (!Object.values(enumKeys).includes(code) || !(player && player.room))
    return;
  if (player.room.isStarted && player.inGame) {
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
    updatePlayerClientSide(player, io);
  }
  if (player.isHost && code === enumKeys.ENTER) {
    startGame(player.room, io, socket);
  }
};

const handleSpace = (player, io) => {
  player.piece.hardDrop();
  player.updateHeap();
  updateRoomClientSide(player.room, io);
};

const handleArrowDown = (player, heap, io) => {
  if (!player.piece.moveDown(heap)) {
    player.updateHeap();
    updateRoomClientSide(player.room, io);
  }
};
