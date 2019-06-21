import React from "react";
import { connect } from "react-redux";
import RoomListSub from "./subcomponent";
import { requestJoinRoom } from "../../actions/room";

let RoomList = ({ rooms, requestJoinRoom }) => {
  const handleClick = roomName => {
    requestJoinRoom(roomName);
  };

  return <RoomListSub rooms={rooms} handleClick={handleClick} />;
};

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};

const actionCreators = { requestJoinRoom };

RoomList = connect(
  mapStateToProps,
  actionCreators
)(RoomList);

export default RoomList;
