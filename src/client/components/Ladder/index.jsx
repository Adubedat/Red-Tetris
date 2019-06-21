import { connect } from "react-redux";
import LadderSub from "./subcomponent";

const mapStateToProps = state => {
  return {};
};

const Ladder = connect(
  mapStateToProps,
  null
)(LadderSub);

export default Ladder;
