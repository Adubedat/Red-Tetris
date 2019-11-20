import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App";
import { handleHash } from "./actions/hash";
import { initListeners } from "./listeners";
import { toast } from "react-toastify";

toast.configure();

const initialState = {
  player: {},
  spectres: [],
  room: {},
  game: { rooms: [], highscores: [] },
  chatMessages: [],
  players: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

handleHash(store.dispatch);
initListeners(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
