import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TopRatedXmen } from "./TopRatedXmen";

import { topRatedXmen } from '../../mock/Xmen.mock';

xdescribe("TopRatedXmen", () => {
  it("displays the full list of users", () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBe(topRatedXmen.length);
  });

  it("displays the xmen list sorted", () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen} />);

    const userNames = screen.getAllByTestId("xmen-name");

    expect(userNames[0].innerHTML).toBe("Nightcrawler");
    expect(userNames[1].innerHTML).toBe("Wolverine");
    expect(userNames[2].innerHTML).toBe("Gambit");
  });

  it("updates the likes counter when clicking the button", () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen} />);

    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]);

    const likes = screen.getAllByTestId("xmen-likes");

    expect(likes[0].innerHTML).toBe("21 likes");
  });

  it("updates the ranking when clicking the buttons", () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen} />);

    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[2]);

    const userNames = screen.getAllByTestId("xmen-name");

    expect(userNames[0].innerHTML).toBe("Nightcrawler");
  });
});
