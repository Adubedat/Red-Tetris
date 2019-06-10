import { CONNECT_USER } from "../actions/actions";

const initialState = {
  username: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT_USER:
      return Object.assign({}, state, {
        username: action.username
      });
    default:
      return state;
  }
}

export default reducer;
