import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import CreateRoom from "../index";

const mockStore = configureStore();
const initialState = {
  player: { name: "Bob" }
};
const store = mockStore(initialState);

describe("<CreateRoom />", () => {
  test("CreateRoom rendering with store without crashing", () => {
    const wrapper = shallow(<CreateRoom store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
