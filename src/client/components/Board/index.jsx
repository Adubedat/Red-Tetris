import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => ({
  board: state.player.board,
  isGameOver: state.room.isGameOver
});

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
