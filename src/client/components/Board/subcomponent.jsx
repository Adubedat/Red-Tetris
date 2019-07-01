import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";
import Cell from "../Cell";

const BoardSub = ({ room, player }) => {
  return null;
  // console.log("koooo");
  // const { id } = player;
  // const board = room.players.filter(player => player.id === id).board;
  // return (
  //   <StyledContainer>
  //     {board.map((cell, i) => (
  //       <Cell key={i++} color={cell} />
  //     ))}
  //   </StyledContainer>
  // );
};

BoardSub.propTypes = {
  room: PropTypes.object,
  player: PropTypes.object
};

export default BoardSub;
