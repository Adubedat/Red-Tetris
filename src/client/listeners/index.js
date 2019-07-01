import socket from "../services/socket-api";
import { UPDATE_ROOMS, UPDATE_ROOM } from "../../constants/constants";
import { updateRooms, updateRoom } from "../actions/room";
import { toast } from "react-toastify";
import { handleHash, handleKeyPress } from "../actions/actions";

export const initListeners = dispatch => {
  socket.on(UPDATE_ROOMS, data => subscribeUpdateRooms(data, dispatch));

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

const subscribeUpdateRooms = (data, dispatch) => {
  const { rooms } = data;
  dispatch(updateRooms(rooms));
};

const subscribeRoom = (data, dispatch) => {
  const { room } = data;
  console.log(room);
  dispatch(updateRoom(room));
};
