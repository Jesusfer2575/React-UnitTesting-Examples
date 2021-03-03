import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputSearch from "./InputSearch";

describe("fire-event examples", () => {
  it("updates search box on typing", () => {
    render(<InputSearch />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "hello" } });

    expect(screen.getByDisplayValue("hello")).toBeTruthy();
  });

  it("triggers the search when 'Enter' key is pressed", () => {
    const onSearch = jest.fn();

    render(<InputSearch onSearch={onSearch} />);

    const input = screen.getByRole("textbox");

    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onSearch).toHaveBeenCalledTimes(3);
  });

  it("triggers the search when the button is clicked", () => {
    const onSearch = jest.fn();

    render(<InputSearch onSearch={onSearch} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(2);
  });
});
