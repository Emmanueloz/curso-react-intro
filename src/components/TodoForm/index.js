import "./TodoForm.css";
import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  /**
   * @param {Event} e
   */
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue("");
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="todoText">
        <span>Escribe tu nuevo TODO</span>
        <textarea
          id="todoText"
          placeholder="Cortar cebolla para el desayuno"
          value={newTodoValue}
          onChange={onChange}
        ></textarea>
      </label>
      <div class="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          class="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" class="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
