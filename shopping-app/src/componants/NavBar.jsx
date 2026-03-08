import { useContext, useState } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import CartContainer from "./CartContainer";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  function toggleIsOpen() {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function getItemsAmount() {
    return shoppingCart
      .map((item) => item.quantity)
      .reduce((sum, quantity) => sum + quantity, 0);
  }

  const { shoppingCart } = useContext(ShoppingContext);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-logo" onClick={goHome}>
          <p>Shop Shop</p>
        </div>

        <div className="shopping-cart" onClick={() => toggleIsOpen()}>
          <img
            src="/src/Assest/shopping-cart.png"
            alt=""
            className="shopping-cart-icon"
          />

          <span className="cart-items-amount">{getItemsAmount()}</span>
        </div>
      </nav>
      {isOpen ? <CartContainer /> : null}
    </>
  );
}

export default NavBar;
