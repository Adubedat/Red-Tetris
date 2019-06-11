import React from "react";
import { hot } from "react-hot-loader";
import Home from "./Home";
import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

function App() {
  return <Home />;
}

export default hot(module)(App);
