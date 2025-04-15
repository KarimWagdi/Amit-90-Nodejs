import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function OutlineComponent() {
  const { name } = useContext(UserContext);
  return (
    <>
      <h1>Inline Component {name}</h1>
    </>
  );
}
