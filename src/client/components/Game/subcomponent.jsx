import React from "react";
import PropTypes from "prop-types";

const GameSub = ({ currentRoom }) => {
  return <p>Welcome to the room {currentRoom}</p>;
};

GameSub.propTypes = {
  roomName: PropTypes.string.isRequired
};

export default GameSub;
