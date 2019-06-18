import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { connect } from "react-redux";
import { newPlayer } from "../../actions/player";
import styles from "./styles";

let Login = props => {
  let input;
  const { newPlayer, playerNameError } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const playerName = input.value;
    newPlayer(playerName);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div style={styles.loginFormStyle}>
          <Button onClick={() => {}}>42 Connect</Button>
          <p>Or</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input
              error={playerNameError}
              helperText={
                playerNameError ? "max 12 alphanumeric characters" : ""
              }
              label="Name"
              ref={node => {
                input = node;
              }}
            />
            <Button type="submit">Connect</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerNameError: state.error.playerNameError
  };
};

const actionCreators = { newPlayer };

Login = connect(
  mapStateToProps,
  actionCreators
)(Login);

export default Login;
