import "./TodoItem.css";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <button
        onClick={onComplete}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        V
      </button>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <button onClick={onDelete} className="Icon Icon-delete">
        X
      </button>
    </li>
  );
}

export { TodoItem };
