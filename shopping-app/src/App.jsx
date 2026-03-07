import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import ShoppingProvider from "./context/ShoppingProvider";
import NavBar from "./componants/NavBar";

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
