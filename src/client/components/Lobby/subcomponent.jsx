import React from "react";
import Login from "../Login";
import CreateRoom from "../CreateRoom";
import RoomList from "../RoomList";
import Ladder from "../Ladder";
import Chat from "../Chat";
import Popup from "../common/Popup";
import { StyledContainer } from "./styles";

const LobbySub = ({ showLoginPopup }) => {
  return (
    <div>
      <Popup open={showLoginPopup}>
        <Login />
      </Popup>
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
