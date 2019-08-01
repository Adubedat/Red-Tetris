import { combineReducers } from "redux";
import {
  UPDATE_PLAYER,
  UPDATE_SPECTRES,
  UPDATE_ROOMS,
  UPDATE_ROOM,
  ADD_CHAT_MESSAGE
} from "../../constants/constants";

const player = (state = {}, action) => {
  // console.log("[STATE UPDATE] with action : ", action.type);
  switch (action.type) {
    case UPDATE_PLAYER:
      return action.player;
    default:
      return state;
  }
};

const spectres = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SPECTRES:
      return action.spectres;
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

const rooms = (state = [], action) => {
  switch (action.type) {
    case UPDATE_ROOMS:
      return action.rooms;
    default:
      return state;
  }
};

const chatMessages = (state = [], action) => {
  switch (action.type) {
    case ADD_CHAT_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  player,
  spectres,
  rooms,
  room,
  chatMessages
});

export default rootReducer;
