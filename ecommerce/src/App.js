import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/aboutpage/About";
import Cart from "./components/cartpage/Cart";
import Contact from "./components/contactpage/Contact";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/homepage/Home";
import Products from "./components/productspage/Products";
import SingleProduct from "./components/productspage/SingleProduct";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import { createContext, useState } from "react";

// export const themeContext = createContext(null);

function App() {
  // const [theme, setTheme] = useState("light");
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
