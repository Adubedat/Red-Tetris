import { connect } from "react-redux";
import BoardOverlaySub from "./subcomponent";

const mapStateToProps = state => ({
  hasLost: state.player.hasLost,
  isStarted: state.room.isStarted,
  inGame: state.player.inGame,
  isHost: state.player.isHost
});

const Board = connect(
  mapStateToProps,
  null
)(BoardOverlaySub);

export default Board;
