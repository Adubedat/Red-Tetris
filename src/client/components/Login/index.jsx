import { connect } from "react-redux";
import { connectPlayer } from "../../actions/player";
import LoginSub from "./subcomponent";

const actionCreators = { connectPlayer };

export default connect(
  null,
  actionCreators
)(LoginSub);
