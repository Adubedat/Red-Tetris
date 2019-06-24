import Game from "../../components/Game";
import Player from "../../components/Player";
import Room from "../../components/Room";
import { isAlphaNumeric } from "../../../utils/utils";
import {
  NEW_PLAYER,
  HANDLE_HASH,
  NEW_ROOM_LIST,
  SHOW_TOAST,
  DISCONNECT
} from "../../../constants/constants";

export const initListeners = socket => {
  socket.on(NEW_PLAYER, (data, callback) => {
    console.log("[EVENT] ", NEW_PLAYER);
    newPlayer(data, callback, socket);
  });

  socket.on(HANDLE_HASH, (data, callback) => {
    console.log("[EVENT] ", HANDLE_HASH);
    handleHash(data, callback, socket);
  });

  socket.on(DISCONNECT, reason => {
    console.log("[EVENT] DISCONNECT :", reason);
    deletePlayer(socket.id);
  });
};

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(NEW_ROOM_LIST, { roomList: Game.getRoomsName() }); //TODO emit to Game
};

const joinRoom = (player, roomName, callback, socket) => {
  console.log("[CALL] joinRoom");
  let room = Game.findRoom(roomName);
  if (!room) {
    room = Game.addRoom(new Room(roomName, socket.id));
  } else if (room.isFull()) {
    callback({ status: "error", message: "Room is full" });
    return;
  }
  socket.emit(NEW_ROOM_LIST, { roomList: Game.getRoomsName() }); //TODO emit to Game
  room.addPlayer(player);
  player.currentRoom = room;
  console.log("THIS : ", player);
  console.log("JOINED :", room);
  callback({ status: "success", joinRoom: true });
};

const newPlayer = (playerName, callback, socket) => {
  console.log("[CALL] newPlayer");
  if (!isAlphaNumeric(playerName) || playerName.length > 12) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "Player name must have 1 to 12 alphanumeric characters"
    });
  } else {
    callback({ status: "success", newPlayer: true });
    const player = Game.addPlayer(new Player(playerName, socket.id));
    console.log(player);
    return player;
  }
};

const leaveRoom = player => {
  const room = player.currentRoom;
  console.log("[CALL] leaveRoom on : ", room);
  room.removePlayer(player.id);
  player.currentRoom = null;
};

const deletePlayer = clientId => {
  const player = Game.findPlayer(clientId);
  console.log("[CALL] deletePlayer on : ", player);
  if (player) {
    if (player.currentRoom) {
      leaveRoom(player);
    }
    Game.removePlayer(clientId);
  }
  console.log(Game);
};

const handleHash = (data, callback, socket) => {
  const { playerName, roomName } = data.gameInfo;
  console.log("DATA : ", data.gameInfo);
  let player = Game.findPlayer(socket.id);
  if (!player) player = newPlayer(playerName, callback, socket);
  if (!player.currentRoom) joinRoom(player, roomName, callback, socket);
  console.log(Game);
};
