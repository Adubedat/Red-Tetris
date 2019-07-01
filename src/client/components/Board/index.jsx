import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => {
  return { board: state.board };
};

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
