import OutlineComponent from "./components/Outline";
import InputComponent from "./components/Input";
import useLogger from "./hooks/useLooger.js";
import { UserProvider } from "./context/UserContext";
import useLocalStorage from "./hooks/useLocalStorage.js";
// import localStorage from "react";
export function App() {
  const [logComponentRender] = useLogger();
  const [setValue] = useLocalStorage();
  return (
    <>
      <UserProvider>
        <h1>Hello from app</h1>
        <InputComponent />
        <OutlineComponent />
      </UserProvider>
      {logComponentRender()}
      {localStorage.setItem("name", "John Doe")}
      {localStorage.getItem("name")}
      {setValue("wagdi")}
      <h2>Rendering logger component</h2>
    </>
  );
}

export default App;
