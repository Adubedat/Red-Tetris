import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import CreateRoom from "./CreateRoom";
import Popup from "./common/Popup";

let Home = props => {
  const { username } = props;
  const isLogged = username ? true : false;
  console.log(props);

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
    username: state.username
  };
};

Home = connect(mapStateToProps)(Home);

export default Home;
