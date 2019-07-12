import React from "react";
import Board from "../Board";
import GameInfo from "../GameInfo";
import { StyledContainer, StyledLeftItem, StyledRightItem } from "./styles";
import Spectres from "../Spectres";
import Chat from "../Chat";
import NextPieces from "../NextPieces";

const GameSub = () => {
  return (
    <StyledContainer id="game">
      <StyledLeftItem id="left-item">
        <Spectres />
        <Board />
        <NextPieces />
      </StyledLeftItem>
      <StyledRightItem id="right-item">
        <GameInfo />
        <Chat />
      </StyledRightItem>
    </StyledContainer>
  );
};

GameSub.propTypes = {};

export default GameSub;
