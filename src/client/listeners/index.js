import socket from "../services/socket-api";
import { NEW_ROOM_LIST, newRoomList } from "../actions/room";
import { toast } from "react-toastify";

const SHOW_TOAST = "SHOW_TOAST";

export const initListeners = () => {
  return dispatch => {
    socket.on(NEW_ROOM_LIST, data => subscribeNewRoomList(data, dispatch));

    socket.on(SHOW_TOAST, data => showToast(data));
  };
};

const showToast = data => {
  switch (data.type) {
    case "error":
      return toast.error(data.message);
    default:
      return toast(data.message);
  }
};

const subscribeNewRoomList = (data, dispatch) => {
  const { roomList } = data;
  console.log("newRoomList dispatched");
  dispatch(newRoomList(roomList));
};
