import React from "react";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";
import Button from "./common/Button";

const headerContainer = {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  padding: 5,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: "crimson"
};

const rightContainer = {
  display: "flex"
};

let Header = props => {
  const handleLogout = () => {
    props.dispatch(connectUser(null));
  };

  return (
    <div style={headerContainer}>
      <p>Red Tetris</p>
      <div style={rightContainer}>
        <p>{props.username}</p>
        <Button onClick={() => handleLogout()}>Logout</Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

Header = connect(mapStateToProps)(Header);

export default Header;
