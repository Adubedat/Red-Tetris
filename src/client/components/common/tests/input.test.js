import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "../Input";

describe("<Input />", () => {
  test("Input rendering without crashing", () => {
    const wrapper = shallow(<Input />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
