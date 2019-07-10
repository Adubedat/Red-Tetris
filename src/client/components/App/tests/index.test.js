import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import App from "../index";

const mockStore = configureStore();
const initialState = {
  player: { name: "" },
  room: { name: "" }
};

const store = mockStore(initialState);

describe("<Login />", () => {
  test("Login rendering with store without crashing", () => {
    const wrapper = shallow(<App store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
