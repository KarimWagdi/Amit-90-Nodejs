import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function InputComponent() {
  const { name, setName } = useContext(UserContext);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
