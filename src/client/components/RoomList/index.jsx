import { connect } from "react-redux";
import RoomListSub from "./subcomponent";

const mapStateToProps = state => ({
  rooms: state.game.rooms,
  playerName: state.player.name
});

const RoomList = connect(
  mapStateToProps,
  null
)(RoomListSub);

export default RoomList;
