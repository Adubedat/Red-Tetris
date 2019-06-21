import { connect } from "react-redux";
import GameSub from "./subcomponent";

const mapStateToProps = state => {
  return { roomName: state.currentRoom };
};

const Game = connect(
  mapStateToProps,
  null
)(GameSub);

export default Game;
