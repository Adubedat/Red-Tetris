import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => {
  return { roomName: state.currentRoom };
};

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
