import React from "react";

function SearchBar({ filterText, onFilter, sortText, onSort }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortText === "alpha"}
          onChange={() => onSort("alpha")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortText === "price"}
          onChange={() => onSort("price")}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select
          value={filterText}
          onChange={(e) => onFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
