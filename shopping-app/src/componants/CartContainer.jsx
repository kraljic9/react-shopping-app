import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);
  const navigate = useNavigate();

  function goToCartPage() {
    navigate("/cart");
  }

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  function removeItem(id) {
    setShoppingCart((prev) => prev.filter((item) => item.id !== id));
  }

  function getTotalPrice() {
    return shoppingCart
      .map((item) => item.price * item.quantity)
      .reduce((sum, price) => sum + price, 0)
      .toFixed(2);
  }

  return (
    <div className="cart-window-container">
      <div className="top">
        <h3 className="cart-window-title">My Shopping Cart</h3>
        <p className="cart-window-amount">
          You have {shoppingCart.length} items in your cart
        </p>
      </div>
      <div className="item-window">
        {shoppingCart.map((item) => {
          return (
            <div className="cart-window-item-box" key={item.title}>
              <div className="cart-window-item-img-container">
                <img src={item.images[0]} alt="" className="cart-window-img" />
              </div>

              <div className="cart-window-item-info">
                <p className="cart-window-item-name">{item.title}</p>
                <p className="cart-window-item-price">
                  ${item.price * item.quantity}
                </p>
                <p className="cart-window-item-amount">
                  Amount: {item.quantity}
                </p>
              </div>

              <button
                className="remove-cart-window-item-btn"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="bottom">
        <div className="price-container">
          <p className="cart-window-total-txt">Total Price </p>
          <span className="cart-window-total-price">${getTotalPrice()}</span>
        </div>

        <div className="my-shopping-cart-container">
          <button className="my-shopping-cart" onClick={goToCartPage}>
            My Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
