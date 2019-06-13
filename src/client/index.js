import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/reducers";
import "./index.css";
import App from "./components/App";
import socketMiddleware from "../middlewares/socketMiddleware";

const store = createStore(rootReducer, applyMiddleware(socketMiddleware()));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
