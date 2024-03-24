import "./TodoSearch.css";
import PropTypes from "prop-types";

TodoSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

function TodoSearch({ searchValue, setSearchValue }) {
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
