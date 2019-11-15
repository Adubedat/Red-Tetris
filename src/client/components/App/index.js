import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { setConfig } from "react-hot-loader"; //to remove
import "react-toastify/dist/ReactToastify.css";
import AppSub from "./subcomponent";

/*

setConfig must be present for hot-loader to work

*/

setConfig({
  reloadHooks: false
});

const mapStateToProps = state => ({
  playerName: state.player.name,
  roomName: state.room.name
});

export default connect(mapStateToProps)(hot(module)(AppSub));
