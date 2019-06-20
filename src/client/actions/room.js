import socket from "../services/socket-api";

export const CREATE_ROOM = "CREATE_ROOM";

export const JOIN_ROOM = "JOIN_ROOM";

export const NEW_ROOM_LIST = "NEW_ROOM_LIST";

export const FETCH_ROOMS = "FETCH_ROOMS";

export const createRoom = (roomName, playerName, history) => {
  return dispatch => {
    socket.emit(CREATE_ROOM, { roomName }, response => {
      if (response.status === "success") {
        console.log("createRoom success callback");
        dispatch(joinRoom(roomName));
        history.push(roomName + "[" + playerName + "]");
      }
    });
  };
};

export const requestJoinRoom = roomName => {
  return dispatch => {
    socket.emit(JOIN_ROOM, { roomName }, response => {
      if (response.status === "success") {
        dispatch(joinRoom(roomName));
      }
    });
  };
};

export const joinRoom = roomName => ({
  type: JOIN_ROOM,
  roomName
});

export const newRoomList = roomList => ({
  type: NEW_ROOM_LIST,
  roomList
});

// export const fetchRooms =
