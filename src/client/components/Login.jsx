import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";

let Login = ({ connectUser }) => {
  let input;

  const loginFormStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const handleSubmit = e => {
    e.preventDefault();
    const username = input.value;
    if (!username.trim()) return;
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
