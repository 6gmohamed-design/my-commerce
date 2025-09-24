import Nav_bar from "./Nav-bar";
import Shop from "./Shop";
import Shopcategory from "./Shopcategory";
import Product from "./product";
import Cart from "./Cart";
import Loginsignup from "./Loginsignup";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import  banner_mens from "./assets/banner_mens.png";
import  banner_women from "./assets/banner_women.png";
import  banner_kids from "./assets/banner_kids.png";
import Description from "./Description"; 
import Relatedproduct from "./Relatedproduct";

function App() {
  
  return (
    <div>
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<Shopcategory banner={banner_mens} category="men" />} />
        <Route path="/womens" element={<Shopcategory banner={banner_women} category="women" />} />
        <Route path="/kids" element={<Shopcategory banner={banner_kids} category="kid" />} />
        <Route path="/product" element={<Product />} >
        <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginsignup" element={<Loginsignup />} />
      </Routes>
      <Description />
      <Relatedproduct />
      <Footer />
    </div>
  );
}

export default App;