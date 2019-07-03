import Game from "../game/class";
import { UPDATE_PLAYERS, enumKeys } from "../../constants/constants";

export const onKeyPressed = (code, callback, socket, io) => {
  if (!Object.values(enumKeys).includes(code)) return;
  const player = Game.findPlayer(socket.id);
  if (player && player.room) {
    switch (code) {
      case enumKeys.ARROW_LEFT:
        break;
      case enumKeys.ARROW_RIGHT:
        break;
      case enumKeys.ARROW_DOWN:
        player.currentPiece.moveDown();
        // movePieceDown(player);
        // callback({ status: "success", data: player.board });
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

const movePieceDown = player => {
  player.setBoardAtIndex(4, 1);
  player.setBoardAtIndex(5, 1);
  player.setBoardAtIndex(14, 1);
  player.setBoardAtIndex(15, 1);
};
