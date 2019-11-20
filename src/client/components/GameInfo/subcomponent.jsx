import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledLabel,
  StyledMenuItem,
  StyledRowContainer,
  StyledDescription,
  StyledRoomName
} from "./styles";

import Select from "../common/Select";
import {
  SOLO,
  BATTLEROYAL,
  MAX_PLAYER_SOLO,
  MAX_PLAYER_BATTLEROYAL
} from "../../../constants/game";

const GameInfoSub = ({
  mode,
  playersCount,
  name,
  isStarted,
  isHost,
  onChangeGameMode
}) => {
  const maxPlayer = mode === SOLO ? MAX_PLAYER_SOLO : MAX_PLAYER_BATTLEROYAL;
  const handleModeChange = e => {
    onChangeGameMode(e.target.value);
  };

  const displayModeDescription = () => {
    if (mode === SOLO) {
      return (
        <StyledDescription>
          Single player mode, try to reach the highest score !
        </StyledDescription>
      );
    } else {
      return (
        <StyledDescription>
          Multiplayer mode, be the last one alive to win ! Removing multiple
          lines at a time send malus blocks to your opponents.
        </StyledDescription>
      );
    }
  };

  return (
    <StyledContainer id="game-info">
      <StyledRoomName>{name}</StyledRoomName>
      <StyledRowContainer>
        <Select
          disabled={!isHost || isStarted}
          value={mode}
          onChange={handleModeChange}
          label="Mode"
        >
          <StyledMenuItem disabled={playersCount > 1} value={SOLO}>
            Solo
          </StyledMenuItem>
          <StyledMenuItem value={BATTLEROYAL}>Battleroyal</StyledMenuItem>
        </Select>
        <div className="description">
          <StyledLabel>Description</StyledLabel>
          {displayModeDescription()}
        </div>
      </StyledRowContainer>
      <div className="player-count">
        [{playersCount}/{maxPlayer} Players]
      </div>
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  mode: PropTypes.string.isRequired,
  playersCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isStarted: PropTypes.bool.isRequired,
  isHost: PropTypes.bool.isRequired,
  onChangeGameMode: PropTypes.func.isRequired
};

export default GameInfoSub;
