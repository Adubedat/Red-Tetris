import socket from "../services/socket-api";

export const CREATE_ROOM = "CREATE_ROOM";

export const JOIN_ROOM = "JOIN_ROOM";

export const NEW_ROOM_LIST = "NEW_ROOM_LIST";

export const ROOM_NAME_ERROR = "ROOM_NAME_ERROR";

export const JOIN_ROOM_ERROR = "JOIN_ROOM_ERROR";

export const createRoom = roomName => {
  return dispatch => {
    socket.emit(CREATE_ROOM, { roomName }, status => {
      if (status === "success") {
        dispatch(roomNameError(false));
        dispatch(joinRoom(roomName));
      } else if (status === "error") {
        dispatch(roomNameError(true));
      }
    });
  };
};

export const requestJoinRoom = roomName => {
  return dispatch => {
    socket.emit(JOIN_ROOM, { roomName }, status => {
      if (status === "success") {
        dispatch(joinRoomError(true));
        dispatch(joinRoom(roomName));
      } else if (status === "error") {
        dispatch(joinRoomError(true));
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

export const roomNameError = error => ({
  type: ROOM_NAME_ERROR,
  error
});

export const joinRoomError = error => ({
  type: JOIN_ROOM_ERROR,
  error
});
