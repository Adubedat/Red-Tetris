import React from "react";
import Lobby from "../Lobby";
import Header from "../Header";
import Game from "../Game";
import Login from "../Login";
import { StyledContainer } from "./styles";

const AppSub = ({ playerName, roomName }) => {
  return (
    <StyledContainer id="App">
      <Header />
      {!playerName ? <Login /> : !roomName ? <Lobby /> : <Game />}
    </StyledContainer>
  );
};

export default AppSub;
