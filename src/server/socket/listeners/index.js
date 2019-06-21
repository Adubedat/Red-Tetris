import Lobby from "../../components/Lobby";
import Player from "../../components/Player";
import Game from "../../components/Game";
import { isAlphaNumeric } from "../../../utils/utils";
import {
  CREATE_ROOM,
  JOIN_ROOM,
  NEW_PLAYER,
  HASH_CHANGED,
  NEW_ROOM_LIST,
  SHOW_TOAST
} from "./constants";

export const initListeners = socket => {
  // socket.on("connect", () => initClientState(socket));

  socket.on(CREATE_ROOM, (data, callback) => createRoom(data, callback, socket)); //eslint-disable-line

  socket.on(JOIN_ROOM, (data, callback) => joinRoom(data, callback, socket));

  socket.on(NEW_PLAYER, (data, callback) => newPlayer(data, callback, socket));

  socket.on(HASH_CHANGED, (data, callback) => handleHashChange(data, callback, socket)); //eslint-disable-line

  socket.on("disconnect", () => deletePlayer(socket));
};

export const initClientState = socket => {
  console.log("on connection received");
  socket.emit(NEW_ROOM_LIST, { roomList: Lobby.getRoomsName() }); //TODO emit to Lobby
};

const createRoom = (data, callback, socket) => {
  const { roomName } = data;
  console.log("createRoom called");
  if (!isAlphaNumeric(roomName) || roomName.length > 12) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "Room name must have 1 to 12 alphanumeric characters"
    });
    console.log(Lobby);
  } else if (Lobby.findRoom(roomName)) {
    joinRoom({ roomName }, callback, socket);
    console.log(Lobby);
  } else {
    Lobby.addRoom(new Game(roomName, socket.id));
    socket.emit(NEW_ROOM_LIST, { roomList: Lobby.getRoomsName() }); //TODO emit to Lobby
    joinRoom({ roomName }, callback, socket);
    callback({ status: "success" });
    console.log(Lobby);
    Lobby.rooms.forEach(room => console.log(room));
  }
};

const joinRoom = (data, callback, socket) => {
  console.log("joinRoom called");
  const { roomName } = data;
  const room = Lobby.findRoom(roomName);
  const player = Lobby.findPlayer(socket.id);
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
  console.log("newPlayer called");
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
  console.log("deletePlayer called");
  const player = Lobby.findPlayer(socket.id);
  if (player) {
    const currentRoom = player.currentRoom === "Lobby" ? Lobby : Lobby.findRoom(player.currentRoom); //eslint-disable-line
    currentRoom.removePlayer(player.id);
  }
  console.log(Lobby);
};

const handleHashChange = (data, callback, socket) => {
  console.log("event received");
  const { hash } = data;
  const regexp = /^[a-z0-9]{1,12}\[[a-z0-9]{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    console.log("hash error");
    callback({
      status: "error",
      message:
        "Hash parameters are invalid. #room[playerName] format expected with max 12 alphanumeric characters for each field"
    });
  } else {
    console.log("hash success");
    const [hashRoomName, hashPlayerName] = hash.match(/\w{1,12}/g);
    newPlayer({ playerName: hashPlayerName }, () => {}, socket);
    createRoom({ roomName: hashRoomName }, () => {}, socket);
    callback({
      status: "success",
      playerName: hashPlayerName,
      roomName: hashRoomName
    });
  }
};
