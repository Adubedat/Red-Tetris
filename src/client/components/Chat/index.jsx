import React from "react";
import { connect } from "react-redux";
import ChatSub from "./subcomponent";

let Chat = () => {
  return <ChatSub />;
};

const mapStateToProps = state => {
  return {};
};

Chat = connect(
  mapStateToProps,
  null
)(Chat);

export default Chat;
