import React from "react";
import RoomList from "../RoomList";
import Chat from "../Chat";
import { StyledContainer, StyledLeftItem, StyledRightItem } from "./styles";
import Ladder from "../Ladder";
import CreateRoom from "../CreateRoom";

const LobbySub = () => {
  return (
    <StyledContainer>
      <StyledLeftItem>
        <CreateRoom />
        <RoomList />
      </StyledLeftItem>
      <StyledRightItem>
        <Ladder />
        <Chat />
      </StyledRightItem>
    </StyledContainer>
  );
};

export default LobbySub;
