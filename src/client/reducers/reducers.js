import { CONNECT_USER, HASH_ERROR, ADD_ROOM } from "../actions/actions";

const initialState = {
  username: "",
  hashError: false,
  rooms: []
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CONNECT_USER:
      return Object.assign({}, state, {
        username: action.username
      });
    case HASH_ERROR:
      return Object.assign({}, state, {
        hashError: action.hashError
      });
    case ADD_ROOM:
      return Object.assign({}, state, {
        rooms: [...state.rooms, action.room]
      });
    default:
      return state;
  }
}

export default reducer;
