import React from "react";
import { connect } from "react-redux";
import Login from "../Login";
import CreateRoom from "../CreateRoom";
import Popup from "../common/Popup";

let Home = props => {
  const { playerName } = props;
  const isLogged = playerName ? true : false;

  return (
    <div>
      <Popup open={!isLogged}>
        <Login />
      </Popup>
      <CreateRoom {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName
  };
};

Home = connect(mapStateToProps)(Home);

export default Home;
