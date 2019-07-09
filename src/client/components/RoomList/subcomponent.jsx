import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { styles, StyledMainContainer, StyledListItems } from "./styles";
import { MAX_PLAYER } from "../../../constants/constants";

const RoomListSub = ({ rooms, playerName }) => {
  const handleClick = roomName => {
    window.location.hash = roomName + "[" + playerName + "]";
  };
  return (
    <StyledMainContainer>
      <List
        component="nav"
        style={{ flex: 1 }}
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={styles.subheader}
          >
            Rooms available
          </ListSubheader>
        }
      >
        {rooms.map(room => (
          <ListItem
            button
            key={room.name}
            onClick={() => handleClick(room.name)}
          >
            <StyledListItems>
              <p>{room.name}</p>
              <p>
                {room.playersCount}/{MAX_PLAYER}
              </p>
            </StyledListItems>
          </ListItem>
        ))}
      </List>
    </StyledMainContainer>
  );
};

RoomListSub.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomListSub;
