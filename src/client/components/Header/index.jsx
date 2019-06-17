import React from "react";
import { connect } from "react-redux";
import { connectUser } from "../../actions/actions";
import Button from "../common/Button";
import styles from "./styles";

let Header = props => {
  const handleLogout = () => {
    props.dispatch(connectUser(null));
  };

  return (
    <div style={styles.headerContainer}>
      <p>Red Tetris</p>
      <div style={styles.rightContainer}>
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
