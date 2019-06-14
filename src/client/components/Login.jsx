import React, { useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";
import { isAlphaNumeric } from "../../Utils/Utils";

let Login = ({ connectUser }) => {
  const [error, setError] = useState(false);
  let input;

  const loginFormStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const handleSubmit = e => {
    e.preventDefault();
    const username = input.value;
    if (!isAlphaNumeric(username)) {
      setError(true);
      return;
    }
    connectUser(username);
    setError(false);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div style={loginFormStyle}>
          <Button onClick={() => {}}>42 Connect</Button>
          <p>Or</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input
              error={error}
              helperText={error ? "max 12 alphanumeric characters" : ""}
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
