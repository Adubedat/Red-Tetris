import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => ({
  board: state.player.board,
  hasLost: state.player.hasLost,
  isGameOver: state.room.isGameOver,
  isStarted: state.room.isStarted
});

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
