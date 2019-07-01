import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => {
  return { room: state.room, player: state.player };
};

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
