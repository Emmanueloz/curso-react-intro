import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";
import PropTypes from "prop-types";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
