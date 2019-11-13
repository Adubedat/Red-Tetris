import { connect } from "react-redux";
import ProgressionSub from "./subcomponent";

const mapStateToProps = state => ({
  score: state.room.score,
  level: state.room.level
});

const Progression = connect(
  mapStateToProps,
  null
)(ProgressionSub);

export default Progression;
