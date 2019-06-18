import Lobby from "../../components/Lobby";
import { isAlphaNumeric } from "../../Utils";
import {
  CREATE_ROOM,
  NEW_PLAYER,
  FETCH_ROOMS,
  HASH_CHANGED,
  NEW_ROOM_LIST
} from "./constants";

const initListeners = socket => {
  socket.on(CREATE_ROOM, (data, callback) =>
    createRoom(data, callback, socket)
  );

  socket.on(NEW_PLAYER, (data, callback) => addPlayer(data, callback));

  socket.on(FETCH_ROOMS, () => fetchRooms(socket));

  socket.on(HASH_CHANGED, (data, callback) => handleHashChange(data, callback));
};

const createRoom = (data, callback, socket) => {
  const { roomName } = data;
  if (!isAlphaNumeric(roomName) || !roomName.trim()) {
    callback("error");
  } else {
    Lobby.addRoom(roomName);
    socket.emit(NEW_ROOM_LIST, Lobby.rooms);
    callback("success");
  }
};

const addPlayer = (data, callback) => {
  const { playerName } = data;
  if (!isAlphaNumeric(playerName) || !playerName.trim()) {
    callback("error");
  } else {
    Lobby.addPlayer(playerName);
    callback("success");
  }
};

const fetchRooms = socket => {
  socket.emit(NEW_ROOM_LIST, Lobby.rooms);
};

const handleHashChange = (data, callback) => {
  console.log("event received");
  const { hash, playerName } = data;
  const regexp = /^\w{1,12}\[\w{1,12}\]$/;
  const found = hash.match(regexp);
  if (!found) {
    callback("playerNameError");
  }
  const [hashRoomName, hashPlayerName] = hash.match(/\w{1,12}/g);
};

export default initListeners;
