import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { Container, User } from "./styles";

let Header = ({ appName, playerName, onClick }) => {
  return (
    <Container>
      <p>{appName}</p>
      <User>
        <p>{playerName}</p>
        {playerName && <Button onClick={onClick}>Logout</Button>}
      </User>
    </Container>
  );
};

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Header;
