import "./CreateTodoButton.css";
function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => console.log("Create todo")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
