import { connect } from "react-redux";
import RoomListSub from "./subcomponent";
import { requestJoinRoom } from "../../actions/room";

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    playerName: state.playerName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: roomName => {
      dispatch(requestJoinRoom(roomName));
    }
  };
};

const RoomList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListSub);

export default RoomList;
