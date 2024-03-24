import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALALALA", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={3} total={6} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, key) => (
          <TodoItem text={todo.text} key={key} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
