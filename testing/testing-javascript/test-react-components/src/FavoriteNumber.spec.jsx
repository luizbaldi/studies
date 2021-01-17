import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FavoriteNumber from "./FavoriteNumber";

describe("<FavoriteNumber />", () => {
  it("should change input value on user type event", () => {
    render(<FavoriteNumber />);

    const input = screen.getByLabelText(/favorite number/i);
    const newValue = "13";

    userEvent.type(input, `{backspace} ${newValue}`);

    expect(input).toHaveValue(newValue);
  });

  it("should display error message when number is invalid", () => {
    render(<FavoriteNumber />);
    const input = screen.getByLabelText(/favorite number/i);
    const invalidValue = "10";

    userEvent.type(input, `{backspace} ${invalidValue}`);

    const invalidMessage = screen.getByText(/number is invalid/i);

    expect(invalidMessage).toBeTruthy();
  });
});
