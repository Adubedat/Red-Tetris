import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import Lobby from "./Lobby";
import Header from "./Header";
import { setConfig } from "react-hot-loader"; //to remove
import { hashChanged } from "../actions/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initListeners } from "../listeners";

setConfig({
  reloadHooks: false
});

toast.configure();

let App = ({ hashChanged, initListeners }) => {
  initListeners();

  const checkHash = () => {
    const hash = window.location.hash.substr(1);
    if (!hash.trim()) return;
    hashChanged(hash);
  };

  checkHash();
  return (
    <div>
      <Header />
      <Router hashType="noslash">
        <Route path="/" component={Lobby} />
      </Router>
    </div>
  );
};

const actionCreators = { hashChanged, initListeners };

App = connect(
  null,
  actionCreators
)(App);

export default hot(module)(App);
