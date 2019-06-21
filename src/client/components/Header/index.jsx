import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import HeaderSub from "./subcomponent";
import { requestJoinRoom } from "../../actions/room";

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    roomName: state.currentRoom,
    showBackHome: state.currentRoom !== "Lobby" && state.currentRoom !== ""
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleBackHome: () => {
      dispatch(requestJoinRoom("Lobby"));
    },
    handleLogout: () => {
      dispatch(connectPlayer(""));
    }
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSub);

export default Header;
