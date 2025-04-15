import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [userName, setUserName] = useState("guest");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/form", { state: { userName } });
  };
  return (
    <>
      {/* <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/form">Form</Link> */}
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <h1>hello from home</h1>
      <button onClick={() => handleClick()}>Go to Form</button>
    </>
  );
}
