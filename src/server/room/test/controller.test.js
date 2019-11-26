import { initListeners } from "../../listeners";
import {
  JOIN_ROOM,
  NEW_PLAYER,
  LEAVE_ROOM,
  LOBBY_ROOM,
  UPDATE_GAME_MODE
} from "../../../constants/actionTypes";
import Game from "../../game/class";
import Player from "../../player/class";
import Room from "../class";
import { MAX_PLAYER_SOLO, BATTLEROYAL, SOLO } from "../../../constants/game";
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

describe("room controller", () => {
  describe("joinRoom function", () => {
    test("should do nothing with an unvalid roomName", done => {
      const roomName = "UnvalidRoomName";
      socket.emit(NEW_PLAYER, "PLAYER1", () => {});
      setTimeout(() => {
        const player = Game.findPlayer(socket.id);
        const oldPlayerRoom = player.room;
        const oldGameRooms = Game.rooms;
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          expect(player.room).toEqual(oldPlayerRoom);
          expect(Game.rooms).toEqual(oldGameRooms);
          done();
        }, 50);
      }, 50);
    });
    test("should do nothing if the player does not exist", done => {
      const roomName = "ValidName";
      const oldGameRooms = Game.rooms;
      socket.emit(JOIN_ROOM, roomName);
      setTimeout(() => {
        expect(Game.rooms).toEqual(oldGameRooms);
        done();
      }, 50);
    });
    test("should create a room, join it, update player room attribute and update sockets rooms if the room does not exist", done => {
      const roomName = "ValidName";
      expect(Game.rooms.length).toBe(0);
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          expect(Game.rooms.length).toBe(1);
          expect(Game.rooms[0].name).toBe(roomName);
          expect(Game.rooms[0].players.length).toBe(1);
          expect(Game.rooms[0].players[0].room).toBe(Game.rooms[0]);
          expect(
            ioServer.sockets.adapter.rooms[roomName].sockets[socket.id]
          ).toBeDefined();
          expect(ioServer.sockets.adapter.rooms[LOBBY_ROOM]).toBeUndefined();
          done();
        }, 50);
      }, 50);
    });
    test("should joinRoom without creating a new one if the room already exists", done => {
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      const room = new Room(roomName);
      room.mode = BATTLEROYAL;
      room.addPlayer(fakePlayer);
      Game.addRoom(room);
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
    test("should do nothing if the room is full", done => {
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      const room = new Room(roomName);
      room.addPlayer(fakePlayer);
      Game.addRoom(room);
      expect(room.playersCount).toBe(MAX_PLAYER_SOLO);
      expect(Game.rooms.length).toBe(1);
      socket.emit(NEW_PLAYER, "Player1", () => {});
      setTimeout(() => {
        const player = Game.findPlayer(socket.id);
        const oldPlayerRoom = player.room;
        const oldGameRooms = Game.rooms;
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          expect(player.room).toEqual(oldPlayerRoom);
          expect(Game.rooms).toEqual(oldGameRooms);
          done();
        }, 50);
      }, 50);
    });
  });
  describe("leaveRoom function", () => {
    test("should remove player from room and update socket rooms if more than one player in the room", done => {
      Game._rooms = [];
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const player = Game.findPlayer(socket.id);
          const room = Game.rooms[0];
          room.mode = BATTLEROYAL;
          room.addPlayer(fakePlayer);

          player.inGame = true;
          expect(room.playersCount).toBe(2);
          expect(
            ioServer.sockets.adapter.rooms[room.name].sockets[socket.id]
          ).toBeDefined();
          expect(ioServer.sockets.adapter.rooms[LOBBY_ROOM]).toBeUndefined();
          socket.emit(LEAVE_ROOM);
          setTimeout(() => {
            expect(Game.rooms[0].players.length).toBe(1);
            expect(ioServer.sockets.adapter.rooms[roomName]).toBeUndefined();
            expect(
              ioServer.sockets.adapter.rooms[LOBBY_ROOM].sockets[socket.id]
            ).toBeDefined();
            Game.removeRoom(room.name);
            expect(player.room).toBeNull();
            done();
          }, 50);
        }, 50);
      }, 50);
    });
    test("should delete the room if no player left in the room", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        expect(Game.rooms.length).toBe(0);
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          expect(Game.rooms.length).toBe(1);
          socket.emit(LEAVE_ROOM);
          setTimeout(() => {
            expect(Game.rooms.length).toBe(0);
            done();
          }, 50);
        }, 50);
      }, 50);
    });
  });
  describe("updateGameMode function", () => {
    test("should update the gameMode from solo to battleroyal", done => {
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          expect(room.mode).toBe(SOLO);
          socket.emit(UPDATE_GAME_MODE, BATTLEROYAL);
          setTimeout(() => {
            expect(room.mode).toBe(BATTLEROYAL);
            done();
          }, 50);
        }, 50);
      }, 50);
    });
    test("should do nothing if there is too many players", done => {
      const roomName = "ValidName";
      const fakePlayer = new Player("FakePlayer", "FakeID");
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          room.addPlayer(fakePlayer);
          room.mode = BATTLEROYAL;
          socket.emit(UPDATE_GAME_MODE, SOLO);
          setTimeout(() => {
            expect(room.mode).toBe(BATTLEROYAL);
            done();
          }, 50);
        }, 50);
      }, 50);
    });
    test("should do nothing if player is not host", done => {
      Game._rooms = [];
      const roomName = "ValidName";
      socket.emit(NEW_PLAYER, "Player1");
      setTimeout(() => {
        socket.emit(JOIN_ROOM, roomName);
        setTimeout(() => {
          const room = Game.rooms[0];
          const player = Game.findPlayer(socket.id);
          player.isHost = false;
          socket.emit(UPDATE_GAME_MODE, BATTLEROYAL);
          setTimeout(() => {
            expect(room.mode).toBe(SOLO);
            done();
          }, 50);
        }, 50);
      }, 50);
    });
  });
});
