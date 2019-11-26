import { initListeners } from "../../listeners";
import {
  updateChatClientSide,
  newChatMessage,
  updatePlayersList
} from "../controller";
import {
  ADD_CHAT_MESSAGE,
  LOBBY_ROOM,
  UPDATE_PLAYERS_LIST,
  NEW_PLAYER,
  JOIN_ROOM
} from "../../../constants/actionTypes";
import Game from "../../game/class";
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

describe("chat controller", () => {
  describe("updateChatClientSide function", () => {
    test("should emit an ADD_CHAT_MESSAGE event", done => {
      socket.on(ADD_CHAT_MESSAGE, data => {
        expect(data).toBeDefined();
        done();
      });
      updateChatClientSide("LeftRoom", LOBBY_ROOM, "Franck", ioServer);
    });
  });
  describe("newChatMessage function", () => {
    test("should emit an ADD_CHAT_MESSAGE event", done => {
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.on(ADD_CHAT_MESSAGE, data => {
          expect(data).toBeDefined();
          done();
        });
        newChatMessage("Hello", socket, ioServer);
      }, 50);
    });
    test("should not crash if player does not exist and return undefined", () => {
      expect(newChatMessage("Hello", socket, ioServer)).toBeUndefined();
    });
  });
  describe("updatePlayersList function", () => {
    test("should emit an UPDATE_PLAYERS_LIST event", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          socket.on(UPDATE_PLAYERS_LIST, data => {
            expect(data).toBeDefined();
            done();
          });
          updatePlayersList(Game.rooms[0], ioServer);
        }, 50);
      }, 50);
    });
  });
});
