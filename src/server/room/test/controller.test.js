import { initListeners } from "../../listeners";
import {
  JOIN_ROOM,
  NEW_PLAYER,
  LEAVE_ROOM
} from "../../../constants/actionTypes";
import Game from "../../game/class";
import Player from "../../player/class";
import Room from "../class";
import { MAX_PLAYER_BATTLEROYAL } from "../../../constants/game";
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

describe("room controller", () => {
  describe("joinRoom function", () => {
    test("joinRoom should callback an error with an invalid roomName", done => {
      const roomName = "UnvalidRoomName";
      socket.emit(NEW_PLAYER, "PLAYER1", () => {});
      setTimeout(() => {
        const callback = jest.fn(response => {
          expect(response.status).toBe("error");
          done();
        });
        socket.emit(JOIN_ROOM, roomName, callback);
      }, 50);
    });
    test("joinRoom should callback an error if the player does not exist", done => {
      const roomName = "ValidName";
      const callback = jest.fn(response => {
        expect(response.status).toBe("error");
        done();
      });
      socket.emit(JOIN_ROOM, roomName, callback);
    });
    test("joinRoom should create a room, join it and update player room attribute if the room does not exist", done => {
      const roomName = "ValidName";
      expect(Game.rooms.length).toBe(0);
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName, () => {});
        setTimeout(() => {
          expect(Game.rooms.length).toBe(1);
          expect(Game.rooms[0].name).toBe(roomName);
          expect(Game.rooms[0].players.length).toBe(1);
          expect(Game.rooms[0].players[0].room).toBe(Game.rooms[0]);
          done();
        }, 50);
      }, 50);
    });
    test("joinRoom should joinRoom without creating a new one if the room already exists", done => {
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      const room = new Room(roomName, fakePlayer.id);
      room.addPlayer(fakePlayer);
      Game.rooms.push(room);
      expect(Game.rooms.length).toBe(1);
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName, () => {});
        setTimeout(() => {
          expect(Game.rooms.length).toBe(1);
          expect(Game.rooms[0].name).toBe(roomName);
          expect(Game.rooms[0].players.length).toBe(2);
          Game.removeRoom(room.name);
          done();
        }, 50);
      }, 50);
    });
    test("joinRoom should callback an error if the room is full", done => {
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      const room = new Room(roomName, fakePlayer.id);
      for (let i = 0; i < MAX_PLAYER_BATTLEROYAL; i++) {
        room.addPlayer(fakePlayer);
      }
      Game.rooms.push(room);
      expect(room.players.length).toBe(MAX_PLAYER_BATTLEROYAL);
      const callback = jest.fn(response => {
        expect(response.status).toBe("error");
        expect(response.message).toBe("Room is full");
        Game.removeRoom(room.name);
        done();
      });
      expect(Game.rooms.length).toBe(1);
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName, callback);
      }, 50);
    });
  });
  describe("leaveRoom function", () => {
    test("leaveRoom should do nothing if the player is not in a room or does not exist", done => {
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        expect(Game.players[0].room).toBeNull();
        socket.emit(LEAVE_ROOM);
        setTimeout(() => {
          expect(Game.players[0].room).toBeNull();
          done();
        }, 50);
      }, 50);
    });
    test("leaveRoom should set player.room to null", done => {
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        expect(Game.players.length).toBe(1);
        expect(Game.players[0].room).toBeNull();
        socket.emit(JOIN_ROOM, "ValidName", () => {});
        setTimeout(() => {
          expect(Game.players[0].room).toBeDefined();
          socket.emit(LEAVE_ROOM);
          setTimeout(() => {
            expect(Game.players[0].room).toBeNull();
            done();
          }, 50);
        }, 50);
      }, 50);
    });
    test("leaveRoom should remove player from room and update the hostId if more than one player in the room", done => {
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      const room = new Room(roomName, socket.id);
      room.addPlayer(fakePlayer);
      Game.rooms.push(room);
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName, () => {});
        setTimeout(() => {
          expect(Game.rooms[0].players.length).toBe(2);
          expect(Game.rooms[0].hostId).toBe(socket.id);
          socket.emit(LEAVE_ROOM);
          setTimeout(() => {
            expect(Game.rooms[0].players.length).toBe(1);
            expect(Game.rooms[0].hostId).toBe(fakePlayer.id);
            Game.removeRoom(room.name);
            done();
          }, 50);
        }, 50);
      }, 50);
    });
    test("leaveRoom should delete the room if no player left in the room", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        expect(Game.players.length).toBe(1);
        expect(Game.players[0].room).toBeNull();
        socket.emit(JOIN_ROOM, roomName, () => {});
        setTimeout(() => {
          expect(Game.rooms.length).toBe(1);
          expect(Game.rooms[0].name).toBe(roomName);
          socket.emit(LEAVE_ROOM);
          setTimeout(() => {
            expect(Game.rooms.length).toBe(0);
            done();
          }, 50);
        }, 50);
      }, 50);
    });
  });
});
