import React from "react";
import { connect } from "react-redux";
import { connectUser } from "../../actions/actions";
import Header from "./subcomponent";

let HeaderContainer = ({ username, connectUser }) => {
  const handleLogout = () => connectUser(null);
  return (
    <Header
      appName="Tetris Rouge"
      username={username}
      onClick={handleLogout}
    ></Header>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

const actionCreators = { connectUser };

HeaderContainer = connect(
  mapStateToProps,
  actionCreators
)(HeaderContainer);

export default HeaderContainer;
