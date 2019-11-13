import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return {
    isStarted: state.room.isStarted,
    mode: state.room.mode
  };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
