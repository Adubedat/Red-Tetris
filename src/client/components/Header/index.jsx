import React from "react";
import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import Button from "../common/Button";
import styles from "./styles";

let Header = props => {
  const handleLogout = () => {
    props.dispatch(connectPlayer(null));
  };

  return (
    <div style={styles.headerContainer}>
      <p>Red Tetris</p>
      <div style={styles.rightContainer}>
        <p>{props.playerName}</p>
        <Button onClick={() => handleLogout()}>Logout</Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName
  };
};

Header = connect(mapStateToProps)(Header);

export default Header;
