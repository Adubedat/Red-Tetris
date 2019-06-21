import React from "react";
import { connect } from "react-redux";
import RoomListSub from "./subcomponent";

let RoomList = ({ rooms }) => {
  return <RoomListSub rooms={rooms} />;
};

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};

RoomList = connect(
  mapStateToProps,
  null
)(RoomList);

export default RoomList;
