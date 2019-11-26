import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProgressionSub from "../subcomponent";
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
  test("ProgressionSub rendering with a player in game", () => {
    const wrapper = shallow(<ProgressionSub score={45123} level={12} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
