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

  socket.on(HASH_CHANGED, data => handleHashChange(data, socket));
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
  const { username } = data;
  if (!isAlphaNumeric(username) || !username.trim()) {
    callback("error");
  } else {
    Lobby.addPlayer(username);
    callback("success");
  }
};

const fetchRooms = socket => {
  socket.emit(NEW_ROOM_LIST, Lobby.rooms);
};

const handleHashChange = (data, socket) => {
  const { hash } = data;
};

export default initListeners;
