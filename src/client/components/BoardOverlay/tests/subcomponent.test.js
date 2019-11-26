import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BoardOverlaySub from "../subcomponent";
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
  test("BoardOverlaySub rendering with a player in game", () => {
    const wrapper = shallow(
      <BoardOverlaySub
        hasLost={false}
        isStarted={true}
        inGame={true}
        isHost={false}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("BoardOverlaySub rendering when a player has lost", () => {
    const wrapper = shallow(
      <BoardOverlaySub
        hasLost={true}
        isStarted={true}
        inGame={false}
        isHost={false}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("BoardOverlaySub rendering when in menu and player is host", () => {
    const wrapper = shallow(
      <BoardOverlaySub
        hasLost={false}
        isStarted={false}
        inGame={false}
        isHost={true}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("BoardOverlaySub rendering when in menu and player is not host", () => {
    const wrapper = shallow(
      <BoardOverlaySub
        hasLost={false}
        isStarted={false}
        inGame={false}
        isHost={false}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("BoardOverlaySub rendering when a player has won (hasLost = false and inGame = true)", () => {
    const wrapper = shallow(
      <BoardOverlaySub
        hasLost={false}
        isStarted={false}
        inGame={true}
        isHost={false}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
