import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";
import { setConfig } from "react-hot-loader"; //to remove
import { toast } from "react-toastify";
import Home from "./Home";
import Header from "./Header";
import { handleHash } from "../actions/actions";
import { initListeners } from "../listeners";
import "react-toastify/dist/ReactToastify.css";

setConfig({
  reloadHooks: false
});

toast.configure();

let App = ({ handleHash, initListeners }) => {
  initListeners();
  handleHash();
  // window.onhashchange = handleHash();
  return (
    <div>
      <EventListener target="window" onHashChange={handleHash} />
      <Header />
      <Router hashType="noslash">
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

const actionCreators = { handleHash, initListeners };

App = connect(
  null,
  actionCreators
)(App);

export default hot(module)(App);
