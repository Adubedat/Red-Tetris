import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Cell from "../index";

const mockStore = configureStore();

const store = mockStore({});

describe("<Cell />", () => {
  test("Cell rendering with store without crashing", () => {
    const wrapper = shallow(<Cell color="" store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
