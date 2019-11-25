import Game from "../../game/class";
import { updatePlayerClientSide } from "../controller";
import { initListeners } from "../../listeners";
import {
  NEW_PLAYER,
  DISCONNECT_PLAYER,
  UPDATE_PLAYER
} from "../../../constants/actionTypes";
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
  socket = io.connect(
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

describe("Test player controller functions", () => {
  test("connectPlayer function with an unvalid name should do nothing", done => {
    socket.emit(NEW_PLAYER, "Player1unvalid");
    setTimeout(() => {
      expect(Game.players.length).toBe(0);
      done();
    }, 50);
  });
  test("connectPlayer with a valid name should create a player and do nothing when the player already exists ", done => {
    socket.emit(NEW_PLAYER, "Player1");
    socket.emit(NEW_PLAYER, "Player1");
    setTimeout(() => {
      expect(Game.players.length).toBe(1);
      expect(Game.players[0].id).toBe(socket.id);
      done();
    }, 50);
  });
  test("disconnectPlayer should remove player from game and from the socket room LOBBY_ROOM", done => {
    socket.emit(NEW_PLAYER, "Player1");
    socket.emit(DISCONNECT_PLAYER);
    setTimeout(() => {
      expect(Game.players.length).toBe(0);
      done();
    }, 50);
  });
  test("updatePlayerClientSide should emit an UPDATE_PLAYER event", done => {
    socket.emit(NEW_PLAYER, "Player1");
    socket.on(UPDATE_PLAYER, data => {
      expect(data).toBeDefined();
      done();
    });
    setTimeout(() => {
      const player = Game.players[0];
      updatePlayerClientSide(player, ioServer);
    }, 50);
  });
});
