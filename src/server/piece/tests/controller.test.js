import { initListeners } from "../../listeners";
import { NEW_PLAYER, JOIN_ROOM } from "../../../constants/actionTypes";
import { enumKeys } from "../../../constants/keys";
import Game from "../../game/class";
import { startGame } from "../../game/controller";
import { onKeyPressed } from "../controller";
const io = require("socket.io-client");
const http = require("http");
const ioBack = require("socket.io");

let socket;
let httpServer;
let httpServerAddr;
let ioServer;

beforeAll(done => {
  httpServer = http.createServer();
  httpServerAddr = httpServer.listen().address();
  ioServer = ioBack(httpServer);
  initListeners(ioServer);
  done();
});

afterAll(done => {
  ioServer.close();
  httpServer.close();
  done();
});

beforeEach(done => {
  socket = io(
    "http://[" + httpServerAddr.address + "]:" + httpServerAddr.port,
    {
      "reconnection delay": 0,
      "reopen delay": 0,
      "force new connection": true,
      transports: ["websocket"]
    }
  );
  socket.on("connect", () => {
    done();
  });
});

afterEach(done => {
  //   Cleanup;
  if (socket.connected) {
    socket.disconnect();
  }
  done();
});

describe("piece controller", () => {
  describe("onKeyPressed function", () => {
    test("sould call the correct action when a key is pressed and player is in game", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          const player = Game.findPlayer(socket.id);
          startGame(room, ioServer, socket);
          room.timer.stop();
          player.piece.moveLeft = jest.fn();
          player.piece.moveRight = jest.fn();
          player.piece.rotate = jest.fn();
          player.piece.moveDown = jest.fn();
          player.piece.hardDrop = jest.fn();
          onKeyPressed(enumKeys.ARROW_LEFT, socket, ioServer);
          expect(player.piece.moveLeft).toHaveBeenCalled();
          onKeyPressed(enumKeys.ARROW_RIGHT, socket, ioServer);
          expect(player.piece.moveRight).toHaveBeenCalled();
          onKeyPressed(enumKeys.ARROW_DOWN, socket, ioServer);
          expect(player.piece.moveDown).toHaveBeenCalled();
          onKeyPressed(enumKeys.ARROW_UP, socket, ioServer);
          expect(player.piece.rotate).toHaveBeenCalled();
          onKeyPressed(enumKeys.SPACE, socket, ioServer);
          expect(player.piece.hardDrop).toHaveBeenCalled();
          onKeyPressed(enumKeys.ENTER, socket, ioServer);
          done();
        }, 50);
      }, 50);
    });
  });
});
