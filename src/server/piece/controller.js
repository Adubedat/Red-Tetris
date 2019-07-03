import Game from "../game/class";
import { UPDATE_PLAYERS, enumKeys } from "../../constants/constants";

export const onKeyPressed = (code, callback, socket, io) => {
  if (!Object.values(enumKeys).includes(code)) return;
  const player = Game.findPlayer(socket.id);
  if (player && player.room) {
    switch (code) {
      case enumKeys.ARROW_LEFT:
        player.currentPiece.moveLeft();
        break;
      case enumKeys.ARROW_RIGHT:
        player.currentPiece.moveRight();
        break;
      case enumKeys.ARROW_DOWN:
        player.currentPiece.moveDown();
        break;
      case enumKeys.ARROW_UP:
        break;
      case enumKeys.SPACE:
        break;
      default:
        break;
    }
    io.in(player.room.name).emit(UPDATE_PLAYERS, {
      players: player.room.createPublicPlayersArray()
    });
  }
};
