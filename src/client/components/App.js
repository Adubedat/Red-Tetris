import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";
import Lobby from "./Lobby";
import Header from "./Header";
import { setConfig } from "react-hot-loader"; //to remove
import { toast } from "react-toastify";
import { handleHash } from "../actions/actions";
import "react-toastify/dist/ReactToastify.css";

setConfig({
  reloadHooks: false
});

toast.configure();

let App = ({ handleHash }) => {
  handleHash();
  return (
    <div>
      <EventListener target="window" onHashChange={handleHash} />
      <Header />
      <Router hashType="noslash">
        <Route path="/" component={Lobby} />
      </Router>
    </div>
  );
};

const actionCreators = { handleHash };

App = connect(
  null,
  actionCreators
)(App);

export default hot(module)(App);
