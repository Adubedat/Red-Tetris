import { connect } from "react-redux";
import HeaderSub from "./subcomponent";
import { leaveRoom } from "../../actions/room";
import { disconnectPlayer } from "../../actions/player";

const mapStateToProps = state => {
  return {
    playerName: state.player.name,
    roomName: state.room.name
  };
};

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
