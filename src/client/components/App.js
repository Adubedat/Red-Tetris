import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

function App() {
  return (
    <Router hashType="noslash">
      <Route path="/" component={Home} />
    </Router>
  );
}

export default hot(module)(App);
