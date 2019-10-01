import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";
import { startGame } from "../../actions/game";

const mapStateToProps = state => ({
  room: state.room,
  isHost: state.player.isHost
});

const actionCreators = { startGame };

const GameInfo = connect(
  mapStateToProps,
  null
)(GameInfoSub);

export default GameInfo;
