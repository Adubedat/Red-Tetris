import { connect } from "react-redux";
import HeaderSub from "./subcomponent";
import { leaveRoom } from "../../actions/room";

const mapStateToProps = state => {
  return {
    roomName: state.room.name,
    playerName: state.player.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackHome: () => {
      dispatch(leaveRoom());
    }
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSub);

export default Header;
