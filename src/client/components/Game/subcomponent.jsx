import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";

const GameSub = ({ roomName }) => {
  console.log(roomName);
  return (
    <div>
      Welcome to the room
      <h2> {roomName}</h2>
      <Board />
    </div>
  );
};

GameSub.propTypes = {
  roomName: PropTypes.string.isRequired
};

export default GameSub;
