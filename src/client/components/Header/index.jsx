import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import HeaderSub from "./subcomponent";
import { leaveRoom } from "../../actions/room";
import { disconnectPlayer } from "../../actions/player";

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    roomName: state.currentRoom,
    showBackHome: state.currentRoom !== "Lobby" && state.currentRoom !== ""
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
