import React, { useState, useEffect, useRef } from "react";
import {
  StyledMainContainer,
  StyledChatContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledTitleContainer,
  StyledMessagesContainer,
  StyledForm,
  StyledPlayerListContainer,
  StyledInput,
  StyledText
} from "./styles";
import { handleKeyPress } from "../../actions/game";
import PropTypes from "prop-types";

const ChatSub = ({ chatMessages, players, onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChange = e => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  const disableKeyPressListener = () => {
    document.onkeydown = null;
  };

  const enableKeyPressListener = () => {
    document.onkeydown = e => handleKeyPress(e);
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatMessages]);

  return (
    <StyledMainContainer id="chat">
      <StyledChatContainer>
        <StyledLeftContainer>
          <StyledTitleContainer>
            <p>Players</p>
          </StyledTitleContainer>
          <StyledPlayerListContainer>
            {players.map((player, index) => (
              <StyledText key={index}>{player}</StyledText>
            ))}
          </StyledPlayerListContainer>
        </StyledLeftContainer>
        <StyledRightContainer>
          <StyledTitleContainer>
            <p>Messages</p>
          </StyledTitleContainer>
          <StyledMessagesContainer>
            {chatMessages.map((message, index) => {
              if (message.type === "message") {
                return (
                  <StyledText key={index}>
                    <font>{message.author}:</font> {message.text}
                  </StyledText>
                );
              } else {
                return (
                  <StyledText key={index}>
                    <font>{message.text}</font>
                  </StyledText>
                );
              }
            })}
            <div ref={messagesEndRef} />
          </StyledMessagesContainer>
          <StyledForm onSubmit={e => handleSubmit(e)}>
            <StyledInput
              type="text"
              id="chatMessage"
              spellCheck="false"
              autoComplete="off"
              placeholder="Write a message ..."
              value={message}
              onChange={e => handleChange(e)}
              onFocus={() => disableKeyPressListener()}
              onBlur={() => enableKeyPressListener()}
            />
          </StyledForm>
        </StyledRightContainer>
      </StyledChatContainer>
    </StyledMainContainer>
  );
};

ChatSub.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  chatMessages: PropTypes.array.isRequired
};

export default ChatSub;
