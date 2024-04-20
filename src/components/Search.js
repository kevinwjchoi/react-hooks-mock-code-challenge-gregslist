import React, {useState} from "react";

function Search({setDisplayFilter, displayFilter}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={displayFilter}
        onChange={((e) => setDisplayFilter(e.target.value))}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
