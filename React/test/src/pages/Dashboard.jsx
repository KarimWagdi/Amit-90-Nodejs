import { Outlet } from "react-router-dom";
import Counter from "../components/Counter.jsx";
export default function Dashboard() {
  return (
    <>
      <h1>hello from dashboard</h1>
      <Counter />
      <Outlet />
    </>
  );
}
