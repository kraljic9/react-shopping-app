import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import ShoppingProvider from "./context/ShoppingProvider";
import NavBar from "./componants/NavBar";
import CartContainer from "./componants/CartContainer";
import { useContext } from "react";
import { ShoppingContext } from "./context/ShoppingContext";

function App() {
  return (
    <ShoppingProvider>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
