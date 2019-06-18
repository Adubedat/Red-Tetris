import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";
import Home from "./Home";
import Header from "./Header";
import { setConfig } from "react-hot-loader"; //to remove
import { hashChanged } from "../actions/actions";

setConfig({
  reloadHooks: false
});

let App = ({ playerName, hashChanged }) => {
  const handleHashChange = () => {
    console.log("COUCOU C MOI");
    const hash = window.location.hash.substr(1);
    if (!hash.trim()) return;
    hashChanged(hash, playerName);
    // const found = hash.match(regexp);
    // if (!hash.trim() || found) {
    //   //no error if no hash or regex match
    //   return;
    // }
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

const mapStateToProps = state => {
  return {
    playerName: state.playerName
  };
};

const actionCreators = { hashChanged };

App = connect(
  mapStateToProps,
  actionCreators
)(App);

export default hot(module)(App);
