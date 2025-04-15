import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Form() {
  const location = useLocation();
  const { userName } = location.state || "guest";
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <h1>This is a form component</h1>
      <form>
        <input
          placeholder="Enter your firstName"
          // onChange={function data(e){ return handelChange(e)}}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />

        <input
          placeholder="Enter your lastName"
          // onChange={function data(e){ return handelChange(e)}}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
      </form>
      <h1>hello {userName}</h1>
    </>
  );
}
