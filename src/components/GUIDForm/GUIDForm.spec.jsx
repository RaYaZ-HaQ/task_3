import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

describe("Form tests", () => {
  it("should match snapshot", () => {
    const { container } = render(<Form />);

    expect(container).toMatchSnapshot();
  });

  it("should disable input and button while loading", async () => {
    render(<Form />);
    const user = userEvent.setup();

    let input = screen.getByRole("textbox");
    await user.type(input, "sample text");
    let button = screen.getByRole("button");
    await user.click(button);

    const loadingIcon = await screen.findByTestId("loading-icon");
    expect(loadingIcon).toBeTruthy();
    expect(screen.getByRole("textbox").getAttributeNames()).toContain(
      "disabled"
    );
    expect(screen.getByRole("button").getAttributeNames()).toContain(
      "disabled"
    );
  });

  it("should validate a correct guid", async () => {
    render(<Form />);
    const user = userEvent.setup();

    const input = screen.getByRole("textbox");
    await user.type(input, "c56a4180-65aa-42ec-a945-5fd21dec0538");
    const button = screen.getByRole("button");
    await user.click(button);

    const successIcon = await screen.findByTestId(
      "check-icon",
      {},
      { timeout: 3000 }
    );
    expect(successIcon).toBeTruthy();
  });

  it("should show an error for a invalid guid", async () => {
    render(<Form />);
    const user = userEvent.setup();

    const input = screen.getByRole("textbox");
    await user.type(input, "invalid-guid");
    const button = screen.getByRole("button");
    await user.click(button);

    const successIcon = await screen.queryByTestId("check-icon");
    expect(successIcon).toBeFalsy();
    const errorPill = await screen.findByText(
      "GUID Invalid",
      {},
      { timeout: 3000 }
    );
    expect(errorPill).toBeTruthy();
  });
});
