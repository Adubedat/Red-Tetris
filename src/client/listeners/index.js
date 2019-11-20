import socket from "../services/socket-api";
import {
  UPDATE_GAME,
  UPDATE_ROOM,
  UPDATE_PLAYER,
  UPDATE_SPECTRES,
  ADD_CHAT_MESSAGE,
  UPDATE_PLAYERS_LIST,
  DISPLAY_TOAST
} from "../../constants/actionTypes";
import { updateGame, updateRoom } from "../actions/room";
import { updatePlayer, updatePlayersList } from "../actions/player";
import { handleHash } from "../actions/hash";
import { addChatMessage } from "../actions/chat";
import { handleKeyPress, updateSpectres } from "../actions/game";
import { toast } from "react-toastify";

export const initListeners = dispatch => {
  socket.on(UPDATE_GAME, data => subscribeUpdateGame(data, dispatch));

  socket.on(UPDATE_ROOM, data => subscribeUpdateRoom(data, dispatch));

  socket.on(UPDATE_PLAYER, data => subscribeUpdatePlayer(data, dispatch));

  socket.on(UPDATE_SPECTRES, data => subscribeUpdateSpectres(data, dispatch));

  socket.on(ADD_CHAT_MESSAGE, data => subscribeAddChatMessage(data, dispatch));

  socket.on(UPDATE_PLAYERS_LIST, data =>
    subscribeUpdatePlayersList(data, dispatch)
  );

  socket.on(DISPLAY_TOAST, data => displayToast(data));

  window.onhashchange = () => handleHash(dispatch);
  document.addEventListener("keydown", handleKeyPress);
};

const subscribeUpdateGame = (data, dispatch) => {
  const { game } = data;
  dispatch(updateGame(game));
};

const subscribeUpdateRoom = (data, dispatch) => {
  const { room } = data;
  dispatch(updateRoom(room));
};

const subscribeUpdatePlayer = (data, dispatch) => {
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

const subscribeUpdatePlayersList = (data, dispatch) => {
  const { players } = data;
  dispatch(updatePlayersList(players));
};

const displayToast = data => {
  switch (data.type) {
    case "error":
      toast.error(data.message, { position: toast.POSITION.TOP_RIGHT });
      break;
    default:
      toast(data.message, { position: toast.POSITION.TOP_RIGHT });
  }
};
