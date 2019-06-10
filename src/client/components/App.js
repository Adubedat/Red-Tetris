import React, { useState } from "react";
import { hot } from "react-hot-loader";
import Login from "./Login";
import Home from "./Home";
import { getCurrentUser } from "../services/authServices";
import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

function App() {
  const [refresh, setRefresh] = useState(null);
  const username = getCurrentUser("username");

  if (username) {
    return <Home refresh={() => setRefresh(0)} />;
  } else {
    return <Login refresh={() => setRefresh(1)} />;
  }
}

export default hot(module)(App);
