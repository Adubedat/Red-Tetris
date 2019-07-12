import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import CellSub from "../subcomponent";

describe("<CellSub />", () => {
  test("Cell rendering without color, letter and is not Spectre", () => {
    const wrapper = render(<CellSub color="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering with color, without letter and is not spectre", () => {
    const wrapper = render(<CellSub color="#000000" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering with letter, without color and is not spectre", () => {
    const wrapper = render(<CellSub color="" letter="P" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering with letter and color, is not spectre", () => {
    const wrapper = render(<CellSub color="#000000" letter="P" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering as spectre, without color and letter", () => {
    const wrapper = render(<CellSub color="" isSpectre={true} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering as spectre, with color and without letter", () => {
    const wrapper = render(<CellSub color="#000000" isSpectre={true} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering as spectre, with letter and without color", () => {
    const wrapper = render(<CellSub isSpectre={true} letter="P" color="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Cell rendering as spectre, with letter and color", () => {
    const wrapper = render(
      <CellSub isSpectre={true} letter="P" color="#000000" />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
