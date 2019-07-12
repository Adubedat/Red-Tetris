import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledUserGroup,
  StyledTitle,
  StyledItemLeft,
  StyledItemCenter,
  StyledItemRight,
  StyledButton
} from "./styles";

let HeaderSub = ({ roomName, onBackHome }) => {
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
      <StyledItemRight id="right-item"></StyledItemRight>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  player: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired
};

export default HeaderSub;
