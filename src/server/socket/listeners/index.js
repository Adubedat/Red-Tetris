import Game from "../../components/Game";
import Player from "../../components/Player";
import Room from "../../components/Room";
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
  socket.emit(NEW_ROOM_LIST, { roomList: Game.getRoomsName() }); //TODO emit to Game
};

// const createRoom = (data, callback, socket) => {
//   const { roomName } = data;
//   console.log("[CALL] createRoom");
//   if (!isAlphaNumeric(roomName) || roomName.length > 12) {
//     socket.emit(SHOW_TOAST, {
//       type: "error",
//       message: "Room name must have 1 to 12 alphanumeric characters"
//     });
//   } else if (Game.findRoom(roomName)) {
//     joinRoom({ roomName }, callback, socket);
//   } else {
//     Game.addRoom(new Room(roomName, socket.id));
//     socket.emit(NEW_ROOM_LIST, { roomList: Game.getRoomsName() }); //TODO emit to Game
//     joinRoom({ roomName }, callback, socket);
//     callback({ status: "success" });
//     Game.rooms.forEach(room => console.log(room));
//   }
// };

const joinRoom = (player, roomName, callback, socket) => {
  console.log("[CALL] joinRoom");
  console.log("[TEST] : ", socket.id);
  let room = Game.findRoom(roomName);
  if (!room) {
    room = Game.addRoom(new Room(roomName, socket.id));
    socket.emit(NEW_ROOM_LIST, { roomList: Game.getRoomsName() }); //TODO emit to Game
  } else if (room.isFull()) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "This room is full"
    });
  }
  player.currentRoom = roomName;
  room.addPlayer(player);
  console.log(Game);
  callback({ status: "success" });
};

const newPlayer = (playerName, callback, socket) => {
  console.log("[CALL] newPlayer");
  if (!isAlphaNumeric(playerName) || playerName.length > 12) {
    socket.emit(SHOW_TOAST, {
      type: "error",
      message: "Player name must have 1 to 12 alphanumeric characters"
    });
  } else {
    Game.addPlayer(new Player(playerName, socket.id));
    console.log(Game);
    callback({ status: "success" });
  }
};

const deletePlayer = clientId => {
  const player = Game.findPlayer(clientId);
  if (player) {
    if (player.inGame) {
      //leave room
    }
    Game.removePlayer(clientId);
  }
  console.log(Game);
};

const handleHash = (data, callback, socket) => {
  try {
    const { playerName, roomName } = data.gameInfo;
    console.log("[TEST] : ", data);
    const player = Game.findPlayer(socket.id);
    if (!player) newPlayer(playerName, callback, socket);
    if (!player.inGame) joinRoom(player, roomName, callback, socket);
    callback({ status: "success" });
  } catch (error) {
    console.log("[ERROR] : ", error);
  }
};
