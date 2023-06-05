import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortState, setSortState] = useState("Sort_By");

  const filteredHogs = hogs.filter((hog) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Greased") return hog.greased;
    if (selectedFilter === "NotGreased") return !hog.greased;
    return true;
  });

  let sortedAndFilteredHogs = [...filteredHogs];

  if (sortState === "Name") {
    sortedAndFilteredHogs.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortState === "Weight") {
    sortedAndFilteredHogs.sort((a, b) => a.weight - b.weight);
  }
  function handleSelectChange(event) {
    setSelectedFilter(event.target.value);
  }

  function handleSortOnChange(event) {
    setSortState(event.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <Sort handleSortOnChange={handleSortOnChange} />
      <Filter handleSelectChange={handleSelectChange} />
      <Tile hogsState={sortedAndFilteredHogs} />
    </div>
  );
}

export default App;
