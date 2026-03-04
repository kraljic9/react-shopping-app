import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  function navigateProductPage() {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="product-card-container" onClick={navigateProductPage}>
      <div className="product-card-img-container">
        <img src={product.images[0]} alt="" className="product-card-img" />
      </div>
      <div className="product-card-txt">
        <p className="product-card-title">{product.title}</p>
        <p className="product-card-price">{product.price}$</p>
      </div>

      <div className="product-card-tag-container">
        {product.tags.map((tag) => (
          <span key={tag} className="product-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
