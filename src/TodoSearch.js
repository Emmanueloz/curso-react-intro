import { useState } from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = useState("");

  console.log("Los usuarios buscan todos de " + searchValue);
  return (
    <input
      placeholder="Search"
      className="TodoSearch"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };
