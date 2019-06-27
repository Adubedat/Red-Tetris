import { connect } from "react-redux";
import CellSub from "./subcomponent";

const mapStateToProps = state => {
  return { roomName: state.currentRoom };
};

const Cell = connect(
  null,
  null
)(CellSub);

export default Cell;
