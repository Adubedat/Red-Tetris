import { connect } from "react-redux";
import GameSub from "./subcomponent";
import CreateRoom from "../CreateRoom";

const mapStateToProps = state => {
  return {
    isStarted: state.room.isStarted,
    isHost: state.player.isHost,
    inGame: state.player.inGame
  };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
