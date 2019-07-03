import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";

const mapStateToProps = state => {
  return { room: state.room };
};

const GameInfo = connect(
  mapStateToProps,
  null
)(GameInfoSub);

export default GameInfo;
