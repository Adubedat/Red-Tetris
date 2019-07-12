import React from "react";
import { shallow, render } from "enzyme";
import toJson from "enzyme-to-json";
import BoardSub from "../subcomponent";

const board = [["", "", ""], ["", "", ""], ["", "", ""]];
describe("<BoardSub />", () => {
  test("Board rendering with a single board", () => {
    const wrapper = shallow(<BoardSub board={board} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Board rendering with a spectre", () => {
    const wrapper = shallow(<BoardSub board={board} isSpectre={true} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Board conditional css when isSpectre is true", () => {
    const wrapper = render(<BoardSub board={[]} isSpectre={true} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
