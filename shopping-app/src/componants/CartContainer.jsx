import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

function CartContainer() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  let itemsList = JSON.parse(localStorage.getItem("shoppingCart"));

  console.log(itemsList);

  return (
    <div className="cart-window-container">
      <div className="top">
        <h3 className="cart-window-title">My Shopping Cart</h3>
        <p className="cart-window-amount">You have 0 items in your cart</p>
      </div>
      <div className="item-window">
        {itemsList.map((item) => {
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

              <button className="remove-cart-window-item-btn">X</button>
            </div>
          );
        })}
      </div>
      <div className="bottom">
        <div className="price-container">
          <p className="cart-window-total">Total Price</p>
        </div>

        <div className="my-shopping-cart-container">
          <button className="my-shopping-cart">My Shopping Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
