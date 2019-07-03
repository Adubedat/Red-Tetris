import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => {
  return { player: state.player };
};

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
