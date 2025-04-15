import { createContext, useState } from "react";
const UserContext = createContext("");
function UserProvider({ children }) {
  const [name, setName] = useState("Guest");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
