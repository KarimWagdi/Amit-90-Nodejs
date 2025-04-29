import Parent from "./components/Parent";
import { useState } from "react";
export function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <Parent />
    </>
  );
}

export default App;
