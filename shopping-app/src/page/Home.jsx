import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import ProductCard from "../componants/ProductCard";

function Home() {
  const { data, loading, error, fetchProducts } = useContext(ShoppingContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!data) return null;

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <>
      {data.products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}

export default Home;
