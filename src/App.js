import "./App.css";
import Navbar from "./Component/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Shop from "./Pages/Shop1.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart1.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import banner_men from "./Component/Assets/banner_mens.png";
import banner_women from "./Component/Assets/banner_women.png";
import banner_kid from "./Component/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_men} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kid} category="kid" />}
          />
          {/* <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route> */}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
