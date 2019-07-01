import { connect } from "react-redux";
import CellSub from "./subcomponent";

const mapStateToProps = state => {
  return { roomName: state.room };
};

const Cell = connect(
  null,
  null
)(CellSub);

export default Cell;
