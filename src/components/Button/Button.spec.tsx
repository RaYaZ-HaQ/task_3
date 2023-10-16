import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/react";
import Button from ".";

describe("Button tests", () => {
  it("should match snapshot", () => {
    const button = render(<Button>Button text</Button>);

    expect(button).toMatchSnapshot();
  });

  it("should show loading icon when loading", () => {
    render(<Button loading>Button text</Button>);

    const spinningLoader = document.getElementsByClassName("spin");
    expect(spinningLoader).toHaveLength(1);
  });

  it("should show check mark icon when success", () => {
    render(<Button success>Button text</Button>);

    const svgs = document.getElementsByTagName("svg");
    expect(svgs).toHaveLength(1);
    expect(svgs[0].getAttribute("stroke")).toEqual("green");
  });
});
