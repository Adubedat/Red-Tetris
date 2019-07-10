import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => ({
  board: state.player.board
});

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
