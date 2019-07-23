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
import { MAX_PLAYER } from "../../../constants/others";

const RoomListSub = ({ rooms, playerName }) => {
  const handleClick = roomName => {
    window.location.hash = roomName + "[" + playerName + "]";
  };
  return (
    <StyledContainer id="room-list">
      <h2>Rooms :</h2>

      <StyledList id="list">
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
            <p id="header">Started</p>
          </StyledListSubHeaderColumn>
        </StyledListSubHeader>
        {rooms.map((room, index) => (
          <StyledListItem
            id="list-item"
            key={index}
            onClick={() => handleClick(room.name)}
          >
            <StyledListItemContent flex={3}>
              <p id="content">{room.name}</p>
            </StyledListItemContent>
            <StyledListItemContent flex={1}>
              <p id="content">BattleRoyal</p>
            </StyledListItemContent>
            <StyledListItemContent flex={1}>
              <p id="content">
                {room.playersCount}/{MAX_PLAYER}
              </p>
            </StyledListItemContent>
            <StyledListItemContent flex={1}>
              <p id="content">{room.isStarted ? "Yes" : "No"}</p>
            </StyledListItemContent>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

RoomListSub.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomListSub;
