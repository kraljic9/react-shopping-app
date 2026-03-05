import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productAmount, setProductAmount] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);

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
        <div className="main-image-container">
          <img
            src={data.images[mainImageIndex]}
            alt=""
            className="main-image"
          />
        </div>
        <div className="slecet-images">
          {data.images.map((image) => {
            return (
              <div className="select-image-box" key={image}>
                <img
                  src={image}
                  alt=""
                  className="select-image"
                  onClick={() => setMainImageIndex(data.images.indexOf(image))}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="product-page-information">
        <div className="product-page-txt">
          <p className="brand">{data.brand}</p>
          <h1 className="product-page-name">{data.title}</h1>
          <p className="product-page-description">{data.description}</p>
          <p className="product-page-price">${data.price}</p>
        </div>

        <div className="product-page-buttons">
          <div className="set-ammount-container">
            <button
              className="add-ammount toggle-ammount"
              onClick={() => setProductAmount((prev) => prev + 1)}
            >
              +
            </button>
            <div className="prodcut-ammount">{productAmount}</div>
            <button
              className="subtract-ammount toggle-ammount"
              onClick={() =>
                setProductAmount((prev) => {
                  if (prev === 0) return 0;
                  return prev - 1;
                })
              }
            >
              -
            </button>
          </div>

          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>

      <div className="product-page-reviews">
        <>
          <h3 className="product-reviews-title">Reviews</h3>
          {data.reviews.map((review) => {
            return (
              <div className="review-box" key={review.comment}>
                <p className="reviewer-name">{review.reviewerName}</p>
                <p className="review-rating">Rating: {review.rating}/5</p>
                <p className="review-comment">
                  <span className="tool-tip"></span>
                  {review.comment}
                </p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default ProductPage;
