import React, { useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";

let Login = ({ connectUser }) => {
  const [error, setError] = useState(false);
  let input;

  const inputProps = {
    error,
    helperText: error ? "max 12 alphanumeric characters" : ""
  };

  const loginFormStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const usernameError = username => {
    const regexp = /\w{1,12}/;
    const found = username.match(regexp);
    console.log(found);
    if (!found || found.length !== 1 || found[0] !== username) {
      setError(true);
      return true;
    }
    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const username = input.value;
    if (usernameError(username)) return;
    connectUser(username);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div style={loginFormStyle}>
          <Button onClick={() => {}}>42 Connect</Button>
          <p>Or</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input
              {...inputProps}
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

const actionCreators = { connectUser };

Login = connect(
  null,
  actionCreators
)(Login);

export default Login;
