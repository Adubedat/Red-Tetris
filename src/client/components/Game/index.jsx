import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return { room: state.room, otherPlayers: state.otherPlayers };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
