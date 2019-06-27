import { combineReducers } from "redux";
import {
  UPDATE_PLAYER,
  NEW_ROOM_LIST,
  UPDATE_ROOM
} from "../../constants/constants";

const playerName = (state = "", action) => {
  console.log("[STATE UPDATE] with action : ", action.type);
  switch (action.type) {
    case UPDATE_PLAYER:
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
    case UPDATE_ROOM:
      return action.roomName;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  playerName,
  rooms,
  currentRoom
});

export default rootReducer;
