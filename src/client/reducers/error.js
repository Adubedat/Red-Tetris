import { PLAYER_NAME_ERROR } from "../actions/player";
import { ROOM_NAME_ERROR, JOIN_ROOM_ERROR } from "../actions/room";

export const error = (state = {}, action) => {
  switch (action.type) {
    case ROOM_NAME_ERROR:
      return Object.assign({}, state, {
        roomNameError: action.error
      });
    case PLAYER_NAME_ERROR:
      return Object.assign({}, state, {
        playerNameError: action.error
      });
    case JOIN_ROOM_ERROR:
      return Object.assign({}, state, {
        joinRoomError: action.error
      });
    default:
      return state;
  }
};
