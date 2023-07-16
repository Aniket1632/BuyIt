import React, { useState } from "react";

const SearchBar = ({ data, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
