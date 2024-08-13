import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { CreateTodoButton } from "../components/CreateTodoButton";

import { TodoContext } from "../context/TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
