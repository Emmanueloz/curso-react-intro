import "./TodoList.css";
import PropTypes from "prop-types";

TodoList.propTypes = {
  children: PropTypes.array.isRequired,
};

function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}

export { TodoList };
