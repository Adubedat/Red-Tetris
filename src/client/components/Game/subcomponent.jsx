import React from "react";
import Board from "../Board";
import GameInfo from "../GameInfo";
import {
  StyledContainer,
  StyledLeftItem,
  StyledRightItem,
  StyledColumnContainer,
  StyledLabel
} from "./styles";
import Spectres from "../Spectres";
import Chat from "../Chat";
import NextPieces from "../NextPieces";

const GameSub = ({ isStarted, inGame, score, level }) => {
  return (
    <StyledContainer id="game">
      <StyledLeftItem id="left-item">
        <Spectres />
        <Board />
        <StyledColumnContainer>
          <NextPieces />
          <StyledLabel>Level :</StyledLabel>
          <div className="value">{level}</div>
          <StyledLabel>Score :</StyledLabel>
          <div className="value">{score}</div>
        </StyledColumnContainer>
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
