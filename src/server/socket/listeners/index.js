import Lobby from "../../components/Lobby";
import Player from "../../components/Player";
import Game from "../../components/Game";
import { isAlphaNumeric } from "../../../utils/utils";
import {
  CREATE_ROOM,
  JOIN_ROOM,
  NEW_PLAYER,
  HANDLE_HASH,
  NEW_ROOM_LIST,
  SHOW_TOAST,
  DISCONNECT
} from "../../../constants/constants";

export const initListeners = socket => {
  socket.on(CREATE_ROOM, (data, callback) => {
    console.log("[EVENT] ", JOIN_ROOM);
    createRoom(data, callback, socket);
  });

  socket.on(JOIN_ROOM, (data, callback) => {
    console.log("[EVENT] ", JOIN_ROOM);
    joinRoom(data, callback, socket);
  });

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
    console.log(reason);
    deletePlayer(socket);
  });
};

export const initClientState = socket => {
  console.log("[EVENT] CONNECTION : send data to client (updating the state)");
  socket.emit(NEW_ROOM_LIST, { roomList: Lobby.getRoomsName() }); //TODO emit to Lobby
};

const createRoom = (data, callback, socket) => {
  const { roomName } = data;
  console.log("[CALL] createRoom");
  if (!isAlphaNumeric(roomName) || roomName.length > 12) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "Room name must have 1 to 12 alphanumeric characters"
    });
  } else if (Lobby.findRoom(roomName)) {
    joinRoom({ roomName }, callback, socket);
  } else {
    Lobby.addRoom(new Game(roomName, socket.id));
    socket.emit(NEW_ROOM_LIST, { roomList: Lobby.getRoomsName() }); //TODO emit to Lobby
    joinRoom({ roomName }, callback, socket);
    callback({ status: "success" });
    Lobby.rooms.forEach(room => console.log(room));
  }
  console.log(Lobby);
};

const joinRoom = (data, callback, socket) => {
  console.log("[CALL] joinRoom");
  const { roomName } = data;
  const room = Lobby.findRoom(roomName);
  const player = Lobby.findPlayer(socket.id);
  if (!player) return;
  const currentRoom =
    player.currentRoom === "Lobby" ? Lobby : Lobby.findRoom(player.currentRoom); //eslint-disable-line
  if (room === currentRoom) return;
  if (!room) {
    // USELESS ????
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "This room does not exists"
    });
  } else if (room.isFull()) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "This room is full"
    });
  } else {
    player.currentRoom = room.name;
    room.addPlayer(player);
    currentRoom.removePlayer(player.id);
    callback({ status: "success" });
    socket.emit(NEW_ROOM_LIST, { roomList: Lobby.getRoomsName() }); //TODO emit to Lobby
  }
};

const newPlayer = (data, callback, socket) => {
  const { playerName } = data;
  console.log("[CALL] newPlayer");
  if (!isAlphaNumeric(playerName) || playerName.length > 12) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "Player name must have 1 to 12 alphanumeric characters"
    });
  } else {
    Lobby.addPlayer(new Player(playerName, socket.id, "Lobby"));
    console.log(Lobby);
    callback({ status: "success" });
  }
};

const deletePlayer = socket => {
  const player = Lobby.findPlayer(socket.id);
  if (player) {
    const currentRoom =
      player.currentRoom === "Lobby"
        ? Lobby
        : Lobby.findRoom(player.currentRoom); //eslint-disable-line
    currentRoom.removePlayer(player.id);
  }
  console.log(Lobby);
};

const handleHash = (data, callback, socket) => {
  const { playerName, roomName } = data.gameInfo;
  newPlayer({ playerName }, () => {}, socket);
  createRoom({ roomName }, () => {}, socket);
  callback({
    status: "success",
    playerName,
    roomName
  });
};
