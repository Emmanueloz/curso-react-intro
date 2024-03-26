import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useTodoViewModel } from "./controller/todoViewModel";

function App() {
  const {
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
    loading,
    error,
  } = useTodoViewModel();

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error!!!</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea tu primer TODO!</p>}
        {searchedTodos.map((todo, key) => (
          <TodoItem
            text={todo.text}
            key={key}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
