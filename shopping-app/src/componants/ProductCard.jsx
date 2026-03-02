function ProductCard({ product }) {
  return (
    <div className="product-card-container">
      <img src={product.images[0]} alt="" className="product-card-img" />
      <p className="product-card-title">{product.title}</p>
      <p className="product-card-price">{product.price}$</p>
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
