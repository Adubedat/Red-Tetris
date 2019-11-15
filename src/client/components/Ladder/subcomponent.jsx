import React from "react";
import PropTypes from "prop-types";
import {
  StyledMainContainer,
  StyledList,
  StyledListItem,
  StyledListItemContent
} from "./styles";

const LadderSub = ({ highscores }) => {
  return (
    <StyledMainContainer id="ladder">
      <h2>High Scores</h2>
      <StyledList id="highscore-list">
        {highscores.map((highscore, index) => {
          return (
            <StyledListItem id="list-item" key={index} index={index}>
              <StyledListItemContent id="content" flex={1}>
                <div>{index + 1 + "."}</div>
              </StyledListItemContent>
              <StyledListItemContent id="content" flex={1}>
                <div>{highscore.score}</div>
              </StyledListItemContent>
              <StyledListItemContent id="content" flex={1}>
                <div>{highscore.playerName}</div>
              </StyledListItemContent>
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledMainContainer>
  );
};

LadderSub.propTypes = {};

export default LadderSub;
