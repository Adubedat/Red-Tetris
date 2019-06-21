import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

const RoomListSub = ({ rooms }) => {
  const handleClick = roomName => {
    console.log(roomName);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        margin: "10px"
      }}
    >
      <List
        component="nav"
        style={{
          // display: "flex",
          flex: 1,
          // flexDirection: "column",
          height: 20
        }}
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
    </div>
  );
};

RoomListSub.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomListSub;
