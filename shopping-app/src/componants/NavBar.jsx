function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-logo">
        <p>Shop Shop</p>
      </div>

      <div className="shopping-cart">
        <img
          src="/src/Assest/shopping-cart.png"
          alt=""
          className="shopping-cart-icon"
        />

        <span className="cart-items-amount">0</span>
      </div>
    </nav>
  );
}

export default NavBar;
