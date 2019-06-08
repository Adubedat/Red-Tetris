import React from "react";
import { hot } from "react-hot-loader";
import Login from "./Login";
import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

function App() {
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default hot(module)(App);
