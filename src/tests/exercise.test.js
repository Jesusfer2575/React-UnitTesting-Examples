import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TopRatedXmen from "../components/TopRatedXmen/TopRatedXmen";

import { topRatedXmen } from '../mock/Xmen.mock';

  // Create tests for validate the behavior of the Component.
  // There are different things you can test and you can follow any strategy you'd like.
  // Here are some examples of thigs to test:
  // - Displays the right amount of xmen in the list
  // - Displays the xmen list sorted (higher to lower likes)
  // - Displays the right number of likes after voting for the first xmen
  // - Updates the likes of the last xmen when clicking the "Vote xmen" 
  //    button until this becomes the first xmen and check if now is the first element 

describe("TopRatedXmen", () => {
  it('Displays the right amount of xmen in the list', () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen}/>);

    const numberElements = screen.getAllByRole('listitem').length;
    expect(numberElements).toBe(4);
  });

  it('Displays the right amount of xmen in the list', () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen}/>);

    const xmen = screen.getAllByTestId('xmen-name');

    expect(xmen[0].innerHTML).toBe('Nightcrawler');
    expect(xmen[1].innerHTML).toBe('Cyclops');
    expect(xmen[2].innerHTML).toBe('Wolverine');
    expect(xmen[3].innerHTML).toBe('Gambit');
  });

  it('Displays the right number of likes', () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen}/>);

    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);

    const xmenLikes = screen.getAllByTestId('xmen-likes');

    expect(xmenLikes[0].innerHTML).toBe(' 22 likes');
  });

  it('Updates the likes of the last xmen', () => {
    render(<TopRatedXmen topRatedXmen={topRatedXmen}/>);

    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);

    const xmen = screen.getAllByTestId('xmen-name');

    expect(xmen[0].innerHTML).toBe('Cyclops');
    expect(xmen[1].innerHTML).toBe('Nightcrawler');
  });
});
