import React from "react";
import CreateRoom from "../CreateRoom";
import RoomList from "../RoomList";
import Ladder from "../Ladder";
import Chat from "../Chat";
import { StyledContainer } from "./styles";

const LobbySub = () => {
  return (
    <div>
      <CreateRoom />
      <StyledContainer>
        <RoomList />
        <Ladder />
        <Chat />
      </StyledContainer>
    </div>
  );
};

export default LobbySub;
