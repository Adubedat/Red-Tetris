import {
  CONNECT_USER,
  ROOM_NAME_ERROR,
  PLAYER_NAME_ERROR,
  NEW_ROOM_LIST
} from "../actions/actions";

const initialState = {
  username: "",
  roomNameError: false,
  playerNameError: false,
  rooms: []
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CONNECT_USER:
      return Object.assign({}, state, {
        username: action.username
      });
    case ROOM_NAME_ERROR:
      return Object.assign({}, state, {
        roomNameError: action.roomNameError
      });
    case PLAYER_NAME_ERROR:
      return Object.assign({}, state, {
        playerNameError: action.playerNameError
      });
    case NEW_ROOM_LIST:
      return Object.assign({}, state, {
        rooms: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
