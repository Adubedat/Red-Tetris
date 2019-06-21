import { connect } from "react-redux";
import ChatSub from "./subcomponent";

const mapStateToProps = state => {
  return {};
};

const Chat = connect(
  mapStateToProps,
  null
)(ChatSub);

export default Chat;
