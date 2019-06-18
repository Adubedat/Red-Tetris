import socket from "../services/socket-api";
import { NEW_ROOM_LIST, newRoomList } from "../actions/room";

export const subscribeNewRoomList = () => {
  console.log("action : subscribeNewRoomList");
  return dispatch => {
    console.log("newRoomList dispatched");
    socket.on(NEW_ROOM_LIST, roomList => {
      dispatch(newRoomList(roomList));
    });
  };
};
