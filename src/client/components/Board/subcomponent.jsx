import React from "react";
import PropTypes from "prop-types";

const BoardSub = ({ currentRoom }) => {
  return <p>Welcome to the room {currentRoom}</p>;
};

BoardSub.propTypes = {
  roomName: PropTypes.string.isRequired
};

export default BoardSub;
