import { connectPlayer, disconnectPlayer, updatePlayer } from "../controller";
import Game from "../../game/class";
import socket from "../../../client/services/socket-api";
// const io = require("socket.io-client");
const http = require("http");
const ioBack = require("socket.io");

// let socket;
let httpServer;
// let httpServerAddr;
let ioServer;

beforeAll(done => {
  httpServer = http.createServer().listen();
  //   httpServerAddr = httpServer.listen().address();
  ioServer = ioBack(httpServer);
  done();
});

afterAll(done => {
  ioServer.close();
  httpServer.close();
  done();
});

beforeEach(done => {
  // Setup
  if (socket.disconnected) {
    socket.connect();
  }
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
  test("connectPlayer function with an unvalid name should return an error", () => {
    const callback = jest.fn(response => {
      expect(response.status).toBe("error");
    });
    connectPlayer("Player1unvalid", callback, socket);
    expect(Game.players.length).toBe(0);
  });
  test("connectPlayer with a valid name should create a player and do nothing when the player already exists ", () => {
    const callback = jest.fn(response => {
      expect(response.status).toBe("success");
    });
    connectPlayer("Player1", callback, socket);
    expect(Game.players.length).toBe(1);
    expect(Game.players[0].id).toBe(socket.id);
    connectPlayer("Player1", callback, socket);
    expect(Game.players.length).toBe(1);
    expect(Game.players[0].id).toBe(socket.id);
  });
});
