import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button tests", () => {
  it("should match snapshot", () => {
    const { container } = render(<Button>Button text</Button>);

    expect(container).toMatchSnapshot();
  });

  it("should show loading icon when loading", async () => {
    render(<Button loading>Button text</Button>);

    const loader = await screen.findByTestId("loading-icon");
    expect(loader).toBeTruthy();
  });

  it("should show check mark icon when success", async () => {
    render(<Button success>Button text</Button>);

    const successIcon = screen.getByTestId("check-icon");
    expect(successIcon).toBeTruthy();
    expect(successIcon.getAttribute("stroke")).toEqual("green");
  });
});
