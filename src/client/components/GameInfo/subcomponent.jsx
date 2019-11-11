import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledButton,
  StyledLabel,
  StyledMenuItem,
  StyledRowContainer,
  StyledDescription
} from "./styles";

import Select from "../common/select";
import { SOLO, BATTLEROYAL } from "../../../constants/constants";

const GameInfoSub = ({ room, isHost }) => {
  const { playersCount, isStarted } = room;
  const [mode, setMode] = React.useState(SOLO);

  const handleModeChange = e => {
    setMode(e.target.value);
  };

  const displayButton = () => {
    if (isHost && !isStarted) {
      return <StyledButton>Press Enter to start</StyledButton>;
    } else if (!isHost && !isStarted) {
      return <StyledButton>Waiting for host to start</StyledButton>;
    } else {
      return <div id="empty"></div>;
    }
  };

  const displayModeDescription = () => {
    if (mode === SOLO) {
      return (
        <StyledDescription>
          Single player mode, try to reach the highest score !
        </StyledDescription>
      );
    } else if (mode === BATTLEROYAL) {
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
      <StyledRowContainer>
        <Select value={mode} onChange={handleModeChange} label="Mode">
          <StyledMenuItem value={SOLO}>Solo</StyledMenuItem>
          <StyledMenuItem value={BATTLEROYAL}>Battleroyal</StyledMenuItem>
        </Select>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          <StyledLabel>Description</StyledLabel>
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            {displayModeDescription()}
          </div>
        </div>
      </StyledRowContainer>

      <p>
        [{playersCount}/{mode === 1 ? 1 : 5} Players]
      </p>
      {displayButton()}
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
