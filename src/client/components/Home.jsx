import React from "react";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";
import Button from "./common/Button";
import Login from "./Login";
import Popup from "./common/Popup";
import Header from "./Header";

let Home = props => {
  const { username } = props;
  const isLogged = username ? true : false;

  return (
    <div>
      <Header />
      <Popup open={!isLogged}>
        <Login />
      </Popup>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

Home = connect(mapStateToProps)(Home);

export default Home;
