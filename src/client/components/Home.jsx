import React from "react";
import Button from "./common/Button";
import { logout } from "../services/authServices";

const Home = props => {
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    logout();
    props.refresh();
  };

  return (
    <div>
      <Button onClick={() => handleLogout()}>Logout</Button>
      <div>WELCOME HOME {username}</div>
    </div>
  );
};

export default Home;
