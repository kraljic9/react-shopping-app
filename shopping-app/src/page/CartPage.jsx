import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  console.log(shoppingCart);

  function getTotalPrice() {
    return shoppingCart
      .map((item) => item.price * item.quantity)
      .reduce((sum, price) => sum + price, 0)
      .toFixed(2);
  }

  function backToProducts() {
    navigate("/");
  }

  return (
    <>
      <h1 className="cart-page-title">My Shopping Cart</h1>

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

              <div className="cart-page-product-amount-container">
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
                <button className="cart-page-product-remove-btn">X</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-page-total-container">
        <p className="cart-page-txt">
          Total:
          <span className="cart-page-total">${getTotalPrice()}</span>
        </p>
      </div>

      <button className="back-to-products" onClick={backToProducts}>
        Back to products
      </button>
    </>
  );
}

export default CartPage;
