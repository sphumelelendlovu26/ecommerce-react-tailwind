import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/components/NavBar.jsx";
import { useState, useEffect } from "react";
import ProductList from "./pages/Products.jsx";
import Modal from "./pages/Modal.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ThemeProvider from "./Context/ThemeContext.jsx";
import CartProvider from "./Context/CartContext.jsx";
import Cart from "./pages/Cart.jsx";

function AnimatedPages({
  userInput,
  setUserInput,
  query,
  setQuery,
  setIsOpen,
  product,
  setModalProduct,
}) {
  const location = useLocation(null);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/products"
          element={
            <ProductList
              userInput={userInput}
              setUserInput={setUserInput}
              query={query}
              setQuery={setQuery}
              setIsOpen={setIsOpen}
              setModalProduct={setModalProduct}
              product={product}
            />
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [product, setModalProduct] = useState(null);

  const [isMobileNav, setIsMobileNav] = useState(window.innerWidth < 640);

  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar
            userInput={userInput}
            setUserInput={setUserInput}
            setQuery={setQuery}
            query={query}
            isMobileNav={isMobileNav}
            setIsMobileNav={setIsMobileNav}
          />
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} product={product} />
          <AnimatedPages
            userInput={userInput}
            setUserInput={setUserInput}
            setQuery={setQuery}
            query={query}
            setIsOpen={setIsOpen}
            setModalProduct={setModalProduct}
          />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
