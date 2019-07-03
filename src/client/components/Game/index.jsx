import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return { otherPlayers: state.otherPlayers };
};

const Game = connect(
  null,
  null
)(GameSub);

export default Game;
