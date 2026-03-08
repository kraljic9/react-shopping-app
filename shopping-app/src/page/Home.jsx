import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import ProductCard from "../componants/ProductCard";

function Home() {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  const {
    data,
    loading,
    error,
    fetchProducts,
    page,
    setPage,
    search,
    limit,
    setCategory,
    category,
    setSearch,
  } = useContext(ShoppingContext);

  useEffect(() => {
    fetchProducts();
  }, [page, search, category]);

  if (!data) return null;

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  const totalPages = Math.ceil(data.total / limit);

  return (
    <>
      <div className="product-category">
        {categories.map((item) => (
          <div
            className="select-category"
            key={item}
            onClick={() => {
              setCategory(item);
              setPage(1);
              setSearch("");
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="products-container">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <div className="btn-change-page-container">
          <button
            className="btn-change-page"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <span>
            Page {page} / {totalPages}
          </span>

          <button
            className="btn-change-page"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
