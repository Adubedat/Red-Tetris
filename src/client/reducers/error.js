import { JOIN_ROOM_ERROR } from "../actions/room";

export const error = (state = {}, action) => {
  switch (action.type) {
    case JOIN_ROOM_ERROR:
      return Object.assign({}, state, {
        joinRoomError: action.error
      });
    default:
      return state;
  }
};
