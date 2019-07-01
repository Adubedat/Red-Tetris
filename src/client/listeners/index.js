import socket from "../services/socket-api";
import { NEW_ROOM_LIST, UPDATE_ROOM } from "../../constants/constants";
import { newRoomList, updateRoom } from "../actions/room";
import { toast } from "react-toastify";
import { handleHash, handleKeyPress } from "../actions/actions";

export const initListeners = dispatch => {
  socket.on(NEW_ROOM_LIST, data => subscribeNewRoomList(data, dispatch));

  socket.on(UPDATE_ROOM, data => subscribeRoom(data, dispatch));
  window.onhashchange = () => handleHash(dispatch);
  // console.log("init key pressed");
  document.onkeydown = e => handleKeyPress(e, dispatch);
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
  dispatch(newRoomList(roomList));
};

const subscribeRoom = (data, dispatch) => {
  const { room } = data;
  console.log(room);
  dispatch(updateRoom(room));
};
