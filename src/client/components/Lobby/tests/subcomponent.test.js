import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LobbySub from "../subcomponent";
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

describe("<LobbySub>", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<LobbySub />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
