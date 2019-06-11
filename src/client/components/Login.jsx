import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { connect } from "react-redux";
import { connectUser } from "../actions/actions";

let Login = props => {
  let input;
  console.log("props :" + props);

  const handleSubmit = e => {
    const username = input.value;
    e.preventDefault();
    console.log(input);
    if (!username.trim()) {
      return;
    }
    props.dispatch(connectUser(username));
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Button onClick={() => {}}>42 Connect</Button>
          <p>Or</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
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

Login = connect()(Login);

export default Login;
