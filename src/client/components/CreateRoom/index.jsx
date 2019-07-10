import { connect } from "react-redux";
import CreateRoomSub from "./subcomponent";

const mapStateToProps = state => ({
  playerName: state.player.name
});

const CreateRoom = connect(
  mapStateToProps,
  null
)(CreateRoomSub);

export default CreateRoom;
