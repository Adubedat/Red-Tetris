import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/reducers";
import "./index.css";
import App from "./components/App";
import socketMiddleware from "../middlewares/socketMiddleware";
import socket from "./services/socket-api";

const initialState = {
  username: "",
  hashError: false,
  rooms: []
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
