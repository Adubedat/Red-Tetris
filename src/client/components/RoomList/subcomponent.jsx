import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledListItemContent,
  StyledListSubHeader,
  StyledListSubHeaderColumn
} from "./styles";
import {
  MAX_PLAYER_BATTLEROYAL,
  MAX_PLAYER_SOLO,
  SOLO
} from "../../../constants/game";

const RoomListSub = ({ rooms, playerName }) => {
  const handleClick = roomName => {
    window.location.hash = "";
    setTimeout(() => {
      window.location.hash = roomName + "[" + playerName + "]";
    }, 20);
  };
  return (
    <StyledContainer id="room-list">
      <h2>Rooms :</h2>

      <StyledListSubHeader id="subheader">
        <StyledListSubHeaderColumn flex={3}>
          <p id="header">Name</p>
        </StyledListSubHeaderColumn>
        <StyledListSubHeaderColumn flex={1}>
          <p id="header">Mode</p>
        </StyledListSubHeaderColumn>
        <StyledListSubHeaderColumn flex={1}>
          <p id="header">Players</p>
        </StyledListSubHeaderColumn>
        <StyledListSubHeaderColumn flex={1}>
          <p id="header">Status</p>
        </StyledListSubHeaderColumn>
      </StyledListSubHeader>
      <StyledList id="list">
        {rooms.map((room, index) => {
          const maxPlayer =
            room.mode === SOLO ? MAX_PLAYER_SOLO : MAX_PLAYER_BATTLEROYAL;
          return (
            <StyledListItem
              id="list-item"
              key={index}
              onClick={() => handleClick(room.name)}
            >
              <StyledListItemContent id="content" flex={3}>
                {room.name}
              </StyledListItemContent>
              <StyledListItemContent id="content" flex={1}>
                {room.mode}
              </StyledListItemContent>
              <StyledListItemContent id="content" flex={1}>
                {room.playersCount}/{maxPlayer}
              </StyledListItemContent>
              <StyledListItemContent id="content" flex={1}>
                {room.isStarted ? "In game" : "In Menu"}
              </StyledListItemContent>
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};

RoomListSub.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomListSub;
