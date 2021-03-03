import React from "react";

export default function ({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };
  const handleButtonClick = () => {
    onSearch(searchTerm);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
}
