import { useContext, useState } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import CartContainer from "./CartContainer";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleIsOpen() {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const { shoppingCart } = useContext(ShoppingContext);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-logo">
          <p>Shop Shop</p>
        </div>

        <div className="shopping-cart" onClick={() => toggleIsOpen()}>
          <img
            src="/src/Assest/shopping-cart.png"
            alt=""
            className="shopping-cart-icon"
          />

          <span className="cart-items-amount">{shoppingCart.length}</span>
        </div>
      </nav>
      {isOpen ? <CartContainer /> : null}
    </>
  );
}

export default NavBar;
