import "./TodoCounter.css";
import PropTypes from "prop-types";

TodoCounter.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

function TodoCounter({ total, completed }) {
  let message;
  if (total === 0) {
    message = <h1 className="TodoCounter">Crea una tarea</h1>;
  } else if (total === completed) {
    message = <h1 className="TodoCounter">Has completado todos las tareas</h1>;
  } else {
    message = (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }

  return message;
}

export { TodoCounter };
