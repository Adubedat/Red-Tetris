import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import GameInfo from "../GameInfo";
import { StyledGameContainer, StyledBoardsContainer } from "./styles";
import Spectres from "../Spectres";

const GameSub = () => {
  return (
    <StyledGameContainer>
      <GameInfo />
      <StyledBoardsContainer>
        <Board />
        <Spectres />
      </StyledBoardsContainer>
    </StyledGameContainer>
  );
};

GameSub.propTypes = {};

export default GameSub;
