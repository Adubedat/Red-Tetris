import { CONNECT_USER, ADD_ROOM } from "../actions/actions";

const initialState = {
  username: "",
  rooms: []
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CONNECT_USER:
      return Object.assign({}, state, {
        username: action.username
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
