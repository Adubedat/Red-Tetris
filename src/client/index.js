import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App";
import { handleHash } from "./actions/actions";
import { initListeners } from "./listeners";

const initialState = {
  playerName: "",
  currentRoom: {},
  rooms: [],
  board: []
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => console.log("[CURRENT STATE] : ", store.getState()));

handleHash(store.dispatch);
initListeners(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
