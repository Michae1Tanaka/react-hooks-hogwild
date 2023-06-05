import React from "react";

function Sort({ handleSortOnChange }) {
  return (
    <select onChange={handleSortOnChange}>
      <option value="Sort_By">Sort By</option>
      <option value="Name">Name</option>
      <option value="Weight">Weight</option>
    </select>
  );
}

export default Sort;
