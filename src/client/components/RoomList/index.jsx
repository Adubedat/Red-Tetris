import { connect } from "react-redux";
import RoomListSub from "./subcomponent";

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    playerName: state.playerName
  };
};

const RoomList = connect(
  mapStateToProps,
  null
)(RoomListSub);

export default RoomList;
