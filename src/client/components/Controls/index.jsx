import React from "react";
import { StyledContainer } from "./styles";

const Controls = () => {
  return (
    <StyledContainer>
      <div id="key-up">
        <kbd className="key">up</kbd>
        <span>piece rotation</span>
      </div>
      <div id="key-down">
        <kbd className="key">down</kbd>
        <span>move piece down</span>
      </div>
      <div id="key-left">
        <kbd className="key">left</kbd>
        <span>move piece left</span>
      </div>
      <div id="key-right">
        <kbd className="key">right</kbd>
        <span>move piece right</span>
      </div>
      <div id="key-space">
        <kbd className="key">space</kbd>
        <span>hard drop</span>
      </div>
    </StyledContainer>
  );
};

export default Controls;
