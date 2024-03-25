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

export { useLocalStorage };
