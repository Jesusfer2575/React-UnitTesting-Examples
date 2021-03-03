import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("selector types", () => {
  it("selects a single element with getBy* query", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React ⚛️")).toBeTruthy();
  });

  it("selects multiple elements with getAllBy* query", () => {
    render(<TodoList />);

    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

  it("attempts to select an unexisting element with queryBy*", () => {
    render(<TodoList />);

    expect(screen.queryByText("Learn Vue")).toBeFalsy();
  });

  it("attempts to select an unexisting elements with queryAllBy*", () => {
    render(<TodoList />);

    expect(screen.queryAllByRole("button").length).toBe(0);
  });

  it("attempts to select an element that displays asynchronously", async () => {
    render(<TodoList />);

    // Remember to await for the results!
    const button = await screen.findByRole("button");

    expect(button.innerHTML).toBe("Add TODO");
  });
});
