import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import GameInfo from "../GameInfo";
import { StyledContainer, StyledSpectreContainer } from "./styles";
import Spectre from "../Spectre";

const GameSub = ({ otherPlayers }) => {
  return (
    <StyledContainer>
      <GameInfo />
      <Board />
      {/* <Spectres/> */}
      {otherPlayers.length ? (
        <StyledSpectreContainer>
          {otherPlayers.map(player => (
            <Spectre key={player.id} player={player} />
          ))}
        </StyledSpectreContainer>
      ) : null}
    </StyledContainer>
  );
};

GameSub.propTypes = {
  otherPlayers: PropTypes.array.isRequired
};

export default GameSub;
