import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProductData() {
    try {
      setLoading(true);

      const response = await fetch(`https://dummyjson.com/products/${id}`);

      if (!response.ok) throw new Error("Error accured while fetching data");

      const data = await response.json();

      setData(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  if (!data) return null;

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="product-page-container">
      <div className="product-page-images-container">
        <div className="main-image"></div>
        <div className="slecet-images"></div>
      </div>

      <div className="product-page-information">
        <p className="brand"></p>
        <h1 className="product-page-name"></h1>
        <p className="product-page-information"></p>
        <p className="product-page-price"></p>

        <div className="product-page-information-buttons">
          <div className="set-ammount-container">
            <button className="add-ammount">+</button>
            <div className="prodcut-ammount">0</div>
            <button className="subtract-ammount">-</button>
          </div>
        </div>
      </div>

      <div className="product-page-comments"></div>
    </div>
  );
}

export default ProductPage;
