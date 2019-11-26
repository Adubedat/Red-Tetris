import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import TetriButton from "../TetriButton";

describe("<TetriButton />", () => {
  test("TetriButton rendering without crashing", () => {
    const wrapper = shallow(<TetriButton />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
