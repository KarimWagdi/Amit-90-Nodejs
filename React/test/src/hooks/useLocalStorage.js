import { useState } from "react";
export default function useLocalStorage() {
  const [storedValue, setStoredValue] = useState(() => {
    getValue;
  });

  function setValue(value) {
    localStorage.setItem("name", value);
    // return "done";
  }
  function getValue() {
    const item = localStorage.getItem("name");
    return item;
  }

  return [setValue];
}
