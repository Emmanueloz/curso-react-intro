import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem(itemName)) || initialValue
  );
  const saveItem = (newItem) => {
    setItems(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return [items, saveItem];
};

function App() {
  const [todos, setTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
