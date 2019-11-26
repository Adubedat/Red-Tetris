import React from "react";
import Board from "../Board";
import GameInfo from "../GameInfo";
import {
  StyledContainer,
  StyledLeftItem,
  StyledRightItem,
  StyledColumnContainer
} from "./styles";
import Spectres from "../Spectres";
import Chat from "../Chat";
import NextPieces from "../NextPieces";
import Progression from "../Progression";
import { SOLO } from "../../../constants/game";
import PropTypes from "prop-types";

const GameSub = ({ mode }) => {
  const displayProgression = () => {
    if (mode === SOLO) return <Progression />;
  };
  return (
    <StyledContainer id="game">
      <StyledLeftItem id="left-item">
        <Spectres />
        <Board />
        <StyledColumnContainer>
          <NextPieces />
          {displayProgression()}
        </StyledColumnContainer>
      </StyledLeftItem>
      <StyledRightItem id="right-item">
        <GameInfo />
        <Chat />
      </StyledRightItem>
    </StyledContainer>
  );
};

GameSub.propTypes = {
  mode: PropTypes.string.isRequired
};

export default GameSub;
