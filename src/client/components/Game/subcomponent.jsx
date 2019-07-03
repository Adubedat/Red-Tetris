import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import GameInfo from "../GameInfo";
import { StyledContainer } from "./styles";
import Spectres from "../Spectres";

const GameSub = () => {
  return (
    <StyledContainer>
      <GameInfo />
      <Board />
      {/* <Spectres /> */}
    </StyledContainer>
  );
};

GameSub.propTypes = {};

export default GameSub;
