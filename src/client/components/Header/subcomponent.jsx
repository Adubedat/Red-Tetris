import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledTitle,
  StyledItemLeft,
  StyledItemCenter,
  StyledItemRight,
  StyledButton
} from "./styles";

let HeaderSub = ({ roomName, playerName, onBackHome }) => {
  return (
    <StyledContainer id="header">
      <StyledItemLeft id="left-item">
        {roomName ? <StyledButton onClick={onBackHome}>Home</StyledButton> : ""}
      </StyledItemLeft>
      <StyledItemCenter id="center-item">
        <StyledTitle id="title" data-text="Tetris Orange">
          Tetris Orange
        </StyledTitle>
      </StyledItemCenter>
      <StyledItemRight id="right-item">{playerName}</StyledItemRight>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  roomName: PropTypes.string,
  playerName: PropTypes.string,
  onBackHome: PropTypes.func.isRequired
};

export default HeaderSub;
