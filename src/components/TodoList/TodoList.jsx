import React from "react";

export default function () {
  const [displayButton, setDisplayButton] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setDisplayButton(true), 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>TODOS</h1>
      <ul className="list">
        <li className="completed">Learn React</li>
        <li className="completed">Learn Jest</li>
        <li>Learn React Testing Library</li>
      </ul>
      {displayButton && <button>Add TODO</button>}
    </div>
  );
}
