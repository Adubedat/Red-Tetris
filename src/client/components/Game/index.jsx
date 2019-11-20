import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return {
    mode: state.room.mode
  };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
