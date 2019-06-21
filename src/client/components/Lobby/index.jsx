import { connect } from "react-redux";
import LobbySub from "./subcomponent";

const mapStateToProps = state => {
  return {
    showLoginPopup: state.playerName ? false : true
  };
};

const Lobby = connect(
  mapStateToProps,
  null
)(LobbySub);

export default Lobby;
