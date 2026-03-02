import { useState } from "react";
import { ShoppingContext } from "./ShoppingContext";

function ShoppingProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) throw new Error("Error accured while fetching data");

      const data = await response.json();

      setData(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ShoppingContext.Provider value={{ data, loading, error, fetchWeather }}>
      {children}
    </ShoppingContext.Provider>
  );
}
