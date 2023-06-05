import React from "react";

function Filter({ handleSelectChange }) {
  return (
    <div className="filterWrapper">
      <select onChange={handleSelectChange}>
        <option value="All">All</option>
        <option value="Greased">Greased</option>
        <option value="NotGreased">Not Greased</option>
      </select>
    </div>
  );
}

export default Filter;
