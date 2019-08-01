import socket from "../services/socket-api";
import {
  UPDATE_ROOMS,
  UPDATE_ROOM,
  UPDATE_PLAYER,
  UPDATE_SPECTRES,
  ADD_CHAT_MESSAGE
} from "../../constants/constants";
import { updateRooms, updateRoom } from "../actions/room";
import { updatePlayer } from "../actions/player";
import {
  handleHash,
  handleKeyPress,
  updateSpectres,
  addChatMessage
} from "../actions/actions";

export const initListeners = dispatch => {
  socket.on(UPDATE_ROOMS, data => subscribeUpdateRooms(data, dispatch));

  socket.on(UPDATE_ROOM, data => subscribeUpdateRoom(data, dispatch));

  socket.on(UPDATE_PLAYER, data => subscribeUpdatePlayers(data, dispatch));

  socket.on(UPDATE_SPECTRES, data => subscribeUpdateSpectres(data, dispatch));

  socket.on(ADD_CHAT_MESSAGE, data => subscribeAddChatMessage(data, dispatch));
  window.onhashchange = () => handleHash(dispatch);
  document.onkeydown = e => handleKeyPress(e);
};

const subscribeUpdateRooms = (data, dispatch) => {
  const { rooms } = data;
  dispatch(updateRooms(rooms));
};

const subscribeUpdateRoom = (data, dispatch) => {
  const { room } = data;
  dispatch(updateRoom(room));
};

const subscribeUpdatePlayers = (data, dispatch) => {
  const { player } = data;
  dispatch(updatePlayer(player));
};

const subscribeUpdateSpectres = (data, dispatch) => {
  const { spectres } = data;
  dispatch(updateSpectres(spectres));
};

const subscribeAddChatMessage = (data, dispatch) => {
  const { message } = data;
  dispatch(addChatMessage(message));
};
