import {
  CONNECT_PLAYER,
  HASH_ERROR,
  NEW_ROOM_LIST,
  CREATE_ROOM
} from "../actions/actions";

const initialState = {
  playerName: "",
  hashError: false,
  rooms: []
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CONNECT_PLAYER:
      return Object.assign({}, state, {
        playerName: action.playerName
      });
    case HASH_ERROR:
      return Object.assign({}, state, {
        hashError: action.hashError
      });
    case CREATE_ROOM:
      return { ...state };
    case NEW_ROOM_LIST:
      return Object.assign({}, state, {
        rooms: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
