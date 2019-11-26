import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Board from "../index";

const mockStore = configureStore();
const initialState = {
  player: { board: [], hasLost: false },
  room: { isStarted: false }
};

const store = mockStore(initialState);

describe("<Board />", () => {
  test("Board rendering with store without crashing", () => {
    const wrapper = shallow(<Board store={store} />);

    expect(toJson(wrapper.dive())).toMatchSnapshot();
  });
});
