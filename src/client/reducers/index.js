import { combineReducers } from "redux";
import { CONNECT_PLAYER } from "../actions/player";
import { NEW_ROOM_LIST, JOIN_ROOM } from "../actions/room";
import { error } from "./error";

const playerName = (state = "", action) => {
  switch (action.type) {
    case CONNECT_PLAYER:
      return action.playerName;
    default:
      return state;
  }
};

const rooms = (state = [], action) => {
  switch (action.type) {
    case NEW_ROOM_LIST:
      return action.roomList;
    default:
      return state;
  }
};

const currentRoom = (state = "", action) => {
  switch (action.type) {
    case JOIN_ROOM:
      return action.roomName;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  playerName,
  currentRoom,
  rooms,
  error
});

export default rootReducer;
