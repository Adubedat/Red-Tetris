import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";
import Home from "./Home";
import Header from "./Header";
import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

let App = () => {
  const handleHashChange = () => {
    const regexp = /^\w{1,12}\[\w{1,12}\]$/;
    const hash = window.location.hash.substr(1);
    const found = hash.match(regexp);
    if (!hash.trim() || found) {
      //no error if no hash or regex match
      return;
    }
  };

  handleHashChange();
  return (
    <div>
      <EventListener target="window" onHashChange={handleHashChange} />
      <Header />
      <Router hashType="noslash">
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default hot(module)(App);
