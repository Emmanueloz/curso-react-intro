import "./CreateTodoButton.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal((state) => !state)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
