import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
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
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
