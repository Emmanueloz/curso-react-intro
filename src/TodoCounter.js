import "./TodoCounter.css";
import PropTypes from "prop-types";

TodoCounter.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

function TodoCounter({ total, completed }) {
  return total === completed ? (
    <h1 className="TodoCounter">Has completado todos las tareas</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
