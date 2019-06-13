import { CONNECT_USER, HASH_ERROR } from "../actions/actions";

const initialState = {
  username: "",
  hashError: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT_USER:
      return Object.assign({}, state, {
        username: action.username
      });
    case HASH_ERROR:
      return Object.assign({}, state, {
        hashError: action.hashError
      });
    default:
      return state;
  }
}

export default reducer;
