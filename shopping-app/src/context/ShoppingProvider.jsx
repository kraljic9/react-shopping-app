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
  const limit = 12;

  const skip = (page - 1) * 12;

  async function fetchProducts() {
    try {
      setLoading(true);

      //const response = await fetch("https://dummyjson.com/products");
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );

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
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingProvider;
