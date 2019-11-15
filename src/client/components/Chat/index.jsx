import { connect } from "react-redux";
import ChatSub from "./subcomponent";
import { newChatMessage } from "../../actions/chat";

const mapStateToProps = state => {
  return {
    chatMessages: state.chatMessages,
    players: state.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: message => {
      dispatch(newChatMessage(message));
    }
  };
};

const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatSub);

export default Chat;
