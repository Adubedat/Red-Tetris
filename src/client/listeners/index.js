import socket from "../services/socket-api";
import {
  UPDATE_ROOMS,
  UPDATE_ROOM,
  UPDATE_PLAYERS
} from "../../constants/constants";
import { updateRooms, updateRoom } from "../actions/room";
import { updateOtherPlayers, updatePlayer } from "../actions/player";
import { handleHash, handleKeyPress } from "../actions/actions";

export const initListeners = dispatch => {
  socket.on(UPDATE_ROOMS, data => subscribeUpdateRooms(data, dispatch));

  socket.on(UPDATE_ROOM, data => subscribeUpdateRoom(data, dispatch, socket));
  socket.on(UPDATE_PLAYERS, data =>
    subscribeUpdatePlayers(data, dispatch, socket)
  );
  window.onhashchange = () => handleHash(dispatch);
  document.onkeydown = e => handleKeyPress(e, dispatch);
};

const subscribeUpdateRooms = (data, dispatch) => {
  const { rooms } = data;
  dispatch(updateRooms(rooms));
};

const subscribeUpdateRoom = (data, dispatch, socket) => {
  const { room } = data;
  dispatch(updateRoom(room));
  const otherPlayers = room.players.filter(p => p.id !== socket.id);
  dispatch(updateOtherPlayers(otherPlayers));
};

const subscribeUpdatePlayers = (data, dispatch, socket) => {
  const { players } = data;
  const player = players.find(p => p.id === socket.id);
  const otherPlayers = players.filter(p => p.id !== socket.id);
  dispatch(updatePlayer(player));
  dispatch(updateOtherPlayers(otherPlayers));
};
