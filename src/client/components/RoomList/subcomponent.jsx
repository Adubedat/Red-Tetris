import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { StyledMainContainer } from "./styles";

const RoomListSub = ({ rooms, handleClick }) => {
  return (
    <StyledMainContainer>
      <List
        component="nav"
        style={{ flex: 1 }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Rooms available
          </ListSubheader>
        }
      >
        {rooms.map((room, index) => (
          <ListItem
            button
            key={room}
            onClick={() => handleClick(room)}
            style={{
              justifyContent: "space-between",
              height: 50,
              borderTop: index !== 0 ? "1px solid" : "",
              borderTopColor: "lightGray"
            }}
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
