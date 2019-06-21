import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App";
import { initListeners } from "./listeners";

const initialState = {
  playerName: "",
  currentRoom: "",
  rooms: []
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => console.log(store.getState()));

initListeners(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
