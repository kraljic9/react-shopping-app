import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

function CartPage() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  console.log(shoppingCart);

  return (
    <div className="cart-page-container">
      <div className="cart-page-product-container">
        {shoppingCart.map((item) => (
          <div className="cart-page-product-box" key={item.id}>
            <div className="cart-page-product-img-container">
              <img
                src={item.images[0]}
                alt=""
                className="cart-page-product-img"
              />
            </div>

            <div className="cart-page-proudct-info">
              <p className="cart-page-product-name">{item.title}</p>
              <p className="cart-page-product-brand">{item.brand}</p>
              <p className="cart-page-product-tags">
                {item.tags.map((tag) => (
                  <span key={item.id}>{tag} </span>
                ))}
              </p>
              <p className="cart-page-product-sky">{item.sku}</p>
            </div>

            <div className="cart-page-product-amount">
              <select
                name="amount"
                id="cart-page-product-amount"
                value={item.quantity}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="cart-page-product-price-container">
              <p className="cart-page-product-price">
                ${item.price * item.quantity}
              </p>
            </div>

            <div className="cart-page-product-button-container">
              <button className="remove-btn">X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
