import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return { room: state.currentRoom };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
