import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const useTodoViewModel = () => {
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

  return {
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
  };
};

export { useTodoViewModel };
