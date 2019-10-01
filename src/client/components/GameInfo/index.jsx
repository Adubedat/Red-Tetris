import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";

const mapStateToProps = state => ({
  room: state.room,
  isHost: state.player.isHost
});

const GameInfo = connect(
  mapStateToProps,
  null
)(GameInfoSub);

export default GameInfo;
