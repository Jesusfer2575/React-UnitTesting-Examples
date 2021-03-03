import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

// RENDER EXAMPLES
describe("render examples", () => {
  it("renders a React Component", () => {
    // Access the resulting output through container property
    const { container, baseElement, asFragment } = render(<HelloWorld />);

    // The resulting output is wrapped in a `<div>` element
    expect(container.outerHTML).toBe("<div><h1>Hello world!</h1></div>");
    //expect(asFragment()).toBe("<DocumentFragment><div><h1>Hello world!</h1></div></DocumentFragment>");
    // expect(baseElement.outerHTML).toBe("<h1>Hello world!</h1>");
  });

  it("renders any JSX", () => {
    // Access the resulting output through container property
    const { container } = render(<h1>Hello world!</h1>);

    // The resulting output is wrapped in a `<div>` element
    expect(container.outerHTML).toBe("<div><h1>Hello world!</h1></div>");
  });
});

// SELECTORS EXAMPLES
describe("selectors examples", () => {
  it("selects an element using the returned methods from render", () => {
    // Gets one of the selectors by destructuring the return value
    const { getByText } = render(<HelloWorld />);

    expect(getByText("Hello world!").tagName).toBe("H1");
  });

  it("renders any JSX", () => {
    render(<h1>Hello world!</h1>);

    // The screen object exposes methods to query the rendered component
    expect(screen.getByText("Hello world!").tagName).toBe("H1");
  });
});
