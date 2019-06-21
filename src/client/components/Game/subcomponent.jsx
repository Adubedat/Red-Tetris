import React from "react";
import PropTypes from "prop-types";

const GameSub = ({ roomName }) => {
  return <p>Welcome to the room {roomName}</p>;
};

GameSub.propTypes = {
  roomName: PropTypes.string.isRequired
};

export default GameSub;
