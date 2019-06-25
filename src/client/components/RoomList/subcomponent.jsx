import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { styles, StyledMainContainer } from "./styles";

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
        {rooms.map((room, index) => (
          <ListItem
            button
            key={room}
            onClick={() => handleClick(room)}
            style={(styles.listItem, { borderTop: index && "1px solid" })}
          >
            <p>{room}</p>
            <p>Available</p>
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
