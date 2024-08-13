import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItems(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 1000);
    // eslint-disable-next-line
  }, []);

  const saveItem = (newItem) => {
    setItems(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return {
    items,
    saveItem,
    loading,
    error,
  };
};

export { useLocalStorage };
