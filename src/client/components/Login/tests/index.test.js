import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Login from "../index";

const mockStore = configureStore();
const initialState = {
  playerName: "",
  currentRoom: ""
};
const store = mockStore(initialState);

describe("<Login />", () => {
  test("Login rendering with store without crashing", () => {
    const wrapper = shallow(<Login store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
