import { initListeners } from "../../listeners";
import {
  initClientState,
  startGame,
  updateGameClientSide
} from "../controller";
import Game from "../class";
import {
  UPDATE_GAME,
  NEW_PLAYER,
  JOIN_ROOM
} from "../../../constants/actionTypes";
import { BATTLEROYAL } from "../../../constants/game";
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

describe("game controller", () => {
  describe("initClientState function", () => {
    test("should emit an UPDATE_GAME event", done => {
      socket.on(UPDATE_GAME, data => {
        expect(data).toBeDefined();
        done();
      });
      initClientState(ioServer);
    });
  });
  describe("startGame function", () => {
    test("should init room.timer, and some room values", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          expect(room.timer).toBeNull();
          expect(room.isStarted).toBeFalsy();
          expect(room.stillInGameCounter).toBe(0);
          startGame(room, ioServer, socket);
          expect(room.timer).not.toBeNull();
          expect(room.isStarted).toBeTruthy();
          expect(room.stillInGameCounter).toBe(1);
          done();
        }, 50);
      }, 50);
    });
    test("should do nothing if room.isStarted = true", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          room.isStarted = true;
          expect(room.timer).toBeNull();
          expect(room.isStarted).toBeTruthy();
          expect(room.stillInGameCounter).toBe(0);
          startGame(room, ioServer, socket);
          expect(room.timer).toBeNull();
          expect(room.isStarted).toBeTruthy();
          expect(room.stillInGameCounter).toBe(0);
          done();
        }, 50);
      }, 50);
    });
    test("should do nothing if room.mode = BATTLEROYAL and not enough players", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          room.mode = BATTLEROYAL;
          expect(room.timer).toBeNull();
          expect(room.isStarted).toBeFalsy();
          expect(room.stillInGameCounter).toBe(0);
          startGame(room, ioServer, socket);
          expect(room.timer).toBeNull();
          expect(room.isStarted).toBeFalsy();
          expect(room.stillInGameCounter).toBe(0);
          done();
        }, 50);
      }, 50);
    });
  });
  describe("updateGameClientSide function", () => {
    test("should emit and UPDATE_GAME event", done => {
      socket.on(UPDATE_GAME, data => {
        expect(data).toBeDefined();
        done();
      });
      updateGameClientSide(ioServer);
    });
  });
  describe("handleInetrval function", () => {
    test("test handle Interval with a player in game", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          const player = Game.findPlayer(socket.id);
          startGame(room, ioServer, socket);
          room.timer.reset(10);
          setTimeout(() => {
            const emptyBoard = Array(20)
              .fill("")
              .map(() => Array(10).fill(""));
            expect(player.heap).not.toEqual(emptyBoard);
            done();
          }, 500);
        }, 50);
      }, 50);
    });
  });
});
