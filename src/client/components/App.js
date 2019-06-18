import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";
import { connect } from "react-redux";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import { setHashError } from "../actions/actions";
import { setConfig } from "react-hot-loader"; //to remove
import Header from "./Header";

setConfig({
  reloadHooks: false
});

let App = ({ hashError, setHashError }) => {
  const handleHashChange = () => {
    const regexp = /^\w{1,12}\[\w{1,12}\]$/;
    const hash = window.location.hash.substr(1);
    const found = hash.match(regexp);
    if (!hash.trim() || found) {
      //no error if no hash or regex match
      setHashError(false);
      return;
    }
    setHashError(true);
  };

  const render = () => {
    if (hashError) {
      return (
        <div>
          <EventListener target="window" onHashChange={handleHashChange} />
          <ErrorPage />;
        </div>
      );
    } else {
      return (
        <div>
          <EventListener target="window" onHashChange={handleHashChange} />
          <Header />
          <Router hashType="noslash">
            <Route path="/" component={Home} />
          </Router>
        </div>
      );
    }
  };

  handleHashChange();
  return render();
};

const mapStateToProps = state => {
  return {
    hashError: state.hashError
  };
};

const actionCreators = { setHashError };

App = connect(
  mapStateToProps,
  actionCreators
)(App);

export default hot(module)(App);
