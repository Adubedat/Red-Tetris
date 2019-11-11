import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";
import { updateGameMode } from "../../actions/game";

const mapStateToProps = state => ({
  room: state.room,
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
