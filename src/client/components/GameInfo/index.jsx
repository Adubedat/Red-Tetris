import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";

const mapStateToProps = state => {
  return { room: state.room, player: state.player };
};

const GameInfo = connect(
  mapStateToProps,
  null
)(GameInfoSub);

export default GameInfo;
