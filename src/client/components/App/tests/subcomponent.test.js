import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AppSub from "../subcomponent";
import socket from "../../../services/socket-api";

beforeEach(done => {
  // Setup
  if (socket.disconnected) {
    socket.connect();
  }
  socket.on("connect", () => {
    done();
  });
});

afterEach(done => {
  //   Cleanup;
  if (socket.connected) {
    socket.disconnect();
  }
  done();
});

describe("<LoginSub />", () => {
  test("App rendering with a player in game", () => {
    const wrapper = shallow(<AppSub playerName="Adubedat" roomName="Room1" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with a player in Lobby", () => {
    const wrapper = shallow(<AppSub playerName="Adubedat" roomName="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with an unconnected user", () => {
    const wrapper = shallow(<AppSub playerName="" roomName="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
