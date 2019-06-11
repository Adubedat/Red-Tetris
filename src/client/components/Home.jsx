import React from "react";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";
import Button from "./common/Button";
import Login from "./Login";
import Popup from "./common/Popup";

let Home = props => {
  const { username } = props;
  const isLogged = username ? true : false;

  const handleLogout = () => {
    props.dispatch(connectUser(null));
  };

  return (
    <div>
      <Popup open={!isLogged}>
        <Login />
      </Popup>
      <Button onClick={() => handleLogout()}>Logout</Button>
      <div>WELCOME HOME {username}</div>
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
