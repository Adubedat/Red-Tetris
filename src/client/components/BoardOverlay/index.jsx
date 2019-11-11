import { connect } from "react-redux";
import BoardOverlaySub from "./subcomponent";

const mapStateToProps = state => ({
  isGameOver: state.room.isGameOver,
  hasLost: state.player.hasLost,
  isStarted: state.room.isStarted
});

const Board = connect(
  mapStateToProps,
  null
)(BoardOverlaySub);

export default Board;
