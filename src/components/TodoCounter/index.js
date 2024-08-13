import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  let message;
  if (totalTodos === 0) {
    message = <h1 className="TodoCounter">Crea una tarea</h1>;
  } else if (totalTodos === completedTodos) {
    message = <h1 className="TodoCounter">Has completado todos las tareas</h1>;
  } else {
    message = (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de{" "}
        <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

  return message;
}

export { TodoCounter };
