import React from "react";
import Button from "../common/Button";
import { Container, User } from "./styles";

let Header = ({ appName, username, onClick }) => {
  return (
    <Container>
      <p>{appName}</p>
      <User>
        <p>{username}</p>
        <Button onClick={onClick}>Logout</Button>
      </User>
    </Container>
  );
};

export default Header;
