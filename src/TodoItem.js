import "./TodoItem.css";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

function TodoItem({ text, completed }) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };