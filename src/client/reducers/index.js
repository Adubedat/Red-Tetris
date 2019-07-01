import { combineReducers } from "redux";
import {
  UPDATE_PLAYER,
  UPDATE_ROOMS,
  UPDATE_ROOM
} from "../../constants/constants";

const player = (state = {}, action) => {
  console.log("[STATE UPDATE] with action : ", action.type);
  switch (action.type) {
    case UPDATE_PLAYER:
      return action.player;
    default:
      return state;
  }
};

const rooms = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ROOMS:
      return action.rooms;
    default:
      return state;
  }
};

const room = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ROOM:
      return action.room;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  player,
  rooms,
  room
});

export default rootReducer;
