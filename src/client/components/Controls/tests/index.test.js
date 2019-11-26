import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Controls from "../index";

describe("<Controls />", () => {
  test("Controls rendering without crashing", () => {
    const wrapper = shallow(<Controls />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
