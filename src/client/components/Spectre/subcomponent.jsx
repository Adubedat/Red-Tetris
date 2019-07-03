import React from "react";
import PropTypes from "prop-types";
import { StyledBoard, StyledContainer } from "./styles";
import Cell from "../Cell";

const SpectreSub = ({ player }) => {
  if (player && player.board) {
    const board = player.board;
    return (
      <StyledContainer>
        <p>{player.name}</p>
        <StyledBoard>
          {board.map((cell, i) => (
            <Cell key={i++} color={cell} />
          ))}
        </StyledBoard>
      </StyledContainer>
    );
  } else return null;
};

SpectreSub.propTypes = {
  room: PropTypes.object,
  player: PropTypes.object
};

export default SpectreSub;
