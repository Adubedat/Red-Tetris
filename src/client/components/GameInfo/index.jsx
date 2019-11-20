import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";
import { updateGameMode } from "../../actions/game";

const mapStateToProps = state => ({
  mode: state.room.mode,
  playersCount: state.room.playersCount,
  name: state.room.name,
  isStarted: state.room.isStarted,
  isHost: state.player.isHost
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeGameMode: mode => {
      dispatch(updateGameMode(mode));
    }
  };
};

const GameInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfoSub);

export default GameInfo;
