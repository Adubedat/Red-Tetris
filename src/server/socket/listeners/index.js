import Lobby from "../../components/Lobby";
import Player from "../../components/Player";
import { isAlphaNumeric } from "../../../utils/utils";
import {
  CREATE_ROOM,
  NEW_PLAYER,
  FETCH_ROOMS,
  HASH_CHANGED,
  NEW_ROOM_LIST
} from "./constants";
import { joinRoom } from "../../../client/actions/room";

const initListeners = socket => {
  socket.on(CREATE_ROOM, (data, callback) => createRoom(data, callback, socket)); //eslint-disable-line

  socket.on(NEW_PLAYER, (data, callback) => newPlayer(data, callback, socket));

  socket.on(FETCH_ROOMS, () => fetchRooms(socket));

  socket.on(HASH_CHANGED, (data, callback) => handleHashChange(data, callback, socket)); //eslint-disable-line
};

const createRoom = (data, callback, socket) => {
  const { roomName } = data;
  if (!isAlphaNumeric(roomName) || roomName.length > 12) {
    callback({
      status: "error",
      message: "Room name must have 1 to 12 alphanumeric characters"
    });
  } else if (Lobby.findRoom(roomName)) {
    joinRoom({ roomName }, callback, socket);
  } else {
    Lobby.addRoom(roomName);
    socket.emit(NEW_ROOM_LIST, Lobby.rooms); //TODO emit to Lobby
    callback({ status: "success" });
  }
};

const newPlayer = (data, callback, socket) => {
  const { playerName } = data;
  if (!isAlphaNumeric(playerName) || playerName.length > 12) {
    callback({
      status: "error",
      message: "Player name must have 1 to 12 alphanumeric characters"
    });
  } else {
    Lobby.addPlayer(new Player(playerName, socket.id));
    callback({ status: "success" });
  }
};

const deletePlayer = (data, socket) => {
  console.log("delete player");
};

const fetchRooms = socket => {
  socket.emit(NEW_ROOM_LIST, Lobby.rooms);
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
      roomName: hashPlayerName
    });
  }
};

export default initListeners;
