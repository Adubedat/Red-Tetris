import { connect } from "react-redux";
import HeaderSub from "./subcomponent";
import { leaveRoom } from "../../actions/room";
import { disconnectPlayer } from "../../actions/player";

const mapStateToProps = state => ({
  player: state.player,
  room: state.room
});

const mapDispatchToProps = dispatch => {
  return {
    onBackHome: () => {
      dispatch(leaveRoom());
    },
    onLogout: () => {
      dispatch(disconnectPlayer());
    }
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSub);

export default Header;
