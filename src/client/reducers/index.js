import { combineReducers } from "redux";
import {
  UPDATE_PLAYER,
  UPDATE_SPECTRES,
  UPDATE_GAME,
  UPDATE_ROOM,
  ADD_CHAT_MESSAGE,
  UPDATE_PLAYERS_LIST
} from "../../constants/actionTypes";

const player = (state = {}, action) => {
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

const game = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GAME:
      return action.game;
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

const players = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLAYERS_LIST:
      return action.players;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  player,
  spectres,
  game,
  room,
  chatMessages,
  players
});

export default rootReducer;
