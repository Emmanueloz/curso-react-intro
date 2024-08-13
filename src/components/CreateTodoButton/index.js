import "./CreateTodoButton.css";
function CreateTodoButton() {
  const handlerAddTodo = () => {
    console.log("agregar todo");
  };

  return (
    <button className="CreateTodoButton" onClick={handlerAddTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
