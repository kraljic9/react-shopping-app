import { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import ProductCard from "../componants/ProductCard";

function Home() {
  const { data, loading, error, fetchProducts, page, setPage } =
    useContext(ShoppingContext);

  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick() {
    if (page === 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setPage((prev) => prev - 1);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [page]);

  if (!data) return null;

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="products-container">
      {data.products.map((product) => (
        <ProductCard product={product} />
      ))}

      <div className="btn-change-page-container">
        <button
          className="btn-change-page"
          onClick={() => handleClick()}
          disabled={isDisabled}
        >
          Previous
        </button>
        <button
          className="btn-change-page"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
