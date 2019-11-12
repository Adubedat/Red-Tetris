import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return {
    score: state.room.score,
    level: state.room.level,
    isStarted: state.room.isStarted,
    inGame: state.player.inGame
  };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
