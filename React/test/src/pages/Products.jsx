import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <>
      <h1>hello from products {id}</h1>
    </>
  );
}
