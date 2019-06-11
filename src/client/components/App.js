import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

function App() {
  return (
    <div>
      <Header />
      <Router hashType="noslash">
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default hot(module)(App);
