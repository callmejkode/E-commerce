import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/aboutpage/About";
import Cart from "./components/cartpage/Cart";
import Contact from "./components/contactpage/Contact";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/homepage/Home";
import Products from "./components/productspage/Products";
import SingleProduct from "./components/productspage/SingleProduct";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
