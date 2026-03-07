import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import ShoppingProvider from "./context/ShoppingProvider";
import NavBar from "./componants/NavBar";
import CartPage from "./page/CartPage";

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
