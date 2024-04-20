import React from "react";
import Search from "./Search";

function Header({setDisplayFilter, displayFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setDisplayFilter={setDisplayFilter} displayFilter={displayFilter}/>
    </header>
  );
}

export default Header;
