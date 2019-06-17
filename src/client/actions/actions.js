import socket from "../services/socket-api";

export const CONNECT_USER = "CONNECT_USER";

export const CREATE_ROOM = "CREATE_ROOM";

export const ROOM_NAME_ERROR = "ROOM_NAME_ERROR";

export const NEW_ROOM_LIST = "NEW_ROOM_LIST";

export const PLAYER_NAME_ERROR = "PLAYER_NAME_ERROR";

export const NEW_PLAYER = "NEW_PLAYER";

export const connectUser = username => ({
  type: CONNECT_USER,
  username
});

export const subscribeNewRoomList = () => {
  console.log("action : subscribeNewRoomList");
  return dispatch => {
    console.log("newRoomList dispatched");
    socket.on(NEW_ROOM_LIST, newRoomList => {
      dispatch({
        type: NEW_ROOM_LIST,
        payload: newRoomList
      });
    });
  };
};

export const createRoom = roomName => {
  return dispatch => {
    socket.emit(CREATE_ROOM, { roomName }, status => {
      if (status === "success") {
        dispatch({
          type: ROOM_NAME_ERROR,
          roomNameError: false
        });
      } else if (status === "error") {
        dispatch({
          type: ROOM_NAME_ERROR,
          roomNameError: true
        });
      }
    });
  };
};

export const newPlayer = username => {
  return dispatch => {
    socket.emit(NEW_PLAYER, { username }, status => {
      if (status === "success") {
        dispatch({
          type: CONNECT_USER,
          username: username
        });
        dispatch({
          type: PLAYER_NAME_ERROR,
          playerNameError: false
        });
      } else if (status === "error") {
        dispatch({
          type: PLAYER_NAME_ERROR,
          playerNameError: true
        });
      }
    });
  };
};
