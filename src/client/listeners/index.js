import socket from "../services/socket-api";
import {
  UPDATE_ROOMS,
  UPDATE_ROOM,
  UPDATE_PLAYERS
} from "../../constants/constants";
import { updateRooms, updateRoom } from "../actions/room";
import { updatePlayers } from "../actions/player";
import { toast } from "react-toastify";
import { handleHash, handleKeyPress } from "../actions/actions";

export const initListeners = dispatch => {
  socket.on(UPDATE_ROOMS, data => subscribeUpdateRooms(data, dispatch));

  socket.on(UPDATE_ROOM, data => subscribeRoom(data, dispatch));
  socket.on(UPDATE_PLAYERS, data => subscribePlayers(data, dispatch, socket));
  window.onhashchange = () => handleHash(dispatch);
  document.onkeydown = e => handleKeyPress(e, dispatch);
};

const subscribeUpdateRooms = (data, dispatch) => {
  const { rooms } = data;
  dispatch(updateRooms(rooms));
};

const subscribeRoom = (data, dispatch) => {
  const { room } = data;
  dispatch(updateRoom(room));
};

const subscribePlayers = (data, dispatch, socket) => {
  const { players } = data;
  dispatch(updatePlayers(players));
};
