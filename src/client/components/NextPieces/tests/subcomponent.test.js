import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import NextPiecesSub from "../subcomponent";
import socket from "../../../services/socket-api";
import { VIVID_BLUE } from "../../../../constants/colors";

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

const nextPiece = {
  shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  pos: { x: 3, y: -3 },
  color: VIVID_BLUE
};

describe("<LoginSub />", () => {
  test("NextPiecesSub rendering with a valid nextPiece", () => {
    const wrapper = render(<NextPiecesSub nextPiece={nextPiece} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("NextPiecesSub rendering without nextPiece", () => {
    const wrapper = render(<NextPiecesSub nextPiece={{}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
