import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Product Page {id}</h1>
      <p>Look at all these products</p>
    </>
  );
}

export default ProductPage;
