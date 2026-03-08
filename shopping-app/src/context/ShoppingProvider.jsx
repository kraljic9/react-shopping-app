import { useState } from "react";
import { ShoppingContext } from "./ShoppingContext";

function ShoppingProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("shoppingCart")) || [],
  );

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const limit = 12;
  const skip = (page - 1) * limit;

  async function fetchProducts() {
    try {
      setLoading(true);

      let api;

      if (category) {
        api = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      } else if (search) {
        api = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
      } else {
        api = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      }

      const response = await fetch(api);

      if (!response.ok) throw new Error("Error accured while fetching data");

      const data = await response.json();

      console.log(data);
      setData(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ShoppingContext.Provider
      value={{
        data,
        loading,
        error,
        fetchProducts,
        shoppingCart,
        setShoppingCart,
        page,
        setPage,
        search,
        setSearch,
        limit,
        category,
        setCategory,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingProvider;
