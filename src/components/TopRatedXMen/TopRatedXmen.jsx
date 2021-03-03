import React, { useCallback, useState } from "react";

export default function TopRatedXmen({ topRatedXmen }) {
  const [xmen, setXmen] = useState(topRatedXmen);

  const sortedXmen = xmen.sort((xmenA, xmenB) =>
    xmenA.likes < xmenB.likes ? 1 : -1
  );

  const voteXmen = useCallback(
    (event) => {
      const xmenName = event.target.name;
      const xmenTemp = xmen.find((x) => x.name === xmenName);

      xmenTemp.likes++;

      setXmen([...xmen]);
    },
    [xmen]
  );

  return (
    <div>
      <h1>Top Rated xmen</h1>
      <ul className="xmen">
        {sortedXmen.map((x) => (
          <li key={x.name} className="xmen">
            <p>
              <span data-testid="xmen-name">{x.name}</span>
              <span data-testid="xmen-likes">{` ${x.likes}`} likes</span>
            </p>
            <button name={x.name} title={x.name} onClick={voteXmen}>
              Vote xmen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
