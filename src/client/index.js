import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App";
import { handleHash } from "./actions/actions";
import { initListeners } from "./listeners";

const initialState = {
  player: {},
  otherPlayers: [],
  room: {},
  rooms: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// store.subscribe(() => console.log("[CURRENT STATE] : ", store.getState()));

handleHash(store.dispatch);
initListeners(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
