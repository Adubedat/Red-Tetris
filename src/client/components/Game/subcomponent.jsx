import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import { StyledContainer } from "./styles";

const GameSub = ({ roomName }) => {
  return (
    <StyledContainer>
      <div>
        <p>notboard</p>
      </div>
      <Board />
      <div>
        <p>notboard</p>
      </div>
    </StyledContainer>
  );
};

GameSub.propTypes = {
  roomName: PropTypes.string.isRequired
};

export default GameSub;
