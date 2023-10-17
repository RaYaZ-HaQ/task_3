import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Application tests", () => {
  it("should match snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it("should container 3 boxes", () => {
    render(<App />);

    const boxes = document.getElementsByClassName("box");
    expect(boxes).toHaveLength(3);
  });
});
