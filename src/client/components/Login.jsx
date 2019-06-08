import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const Login = () => {
  return (
    <form style={{ display: "flex" }}>
      <Input id="player-name" label="Name" />
      <Button type="submit">Connect</Button>
    </form>
  );
};

export default Login;
