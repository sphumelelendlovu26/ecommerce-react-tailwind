import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/components/NavBar.jsx";
import { useState, useEffect, useMemo } from "react";
import { lazy, Suspense } from "react";
import Modal from "./pages/Modal.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ThemeProvider from "./Context&functions/ThemeContext.jsx";
import CartProvider from "./Context&functions/CartContext.jsx";
const Cart = lazy(() => import("./pages/Cart.jsx"));
import Products from "./pages/Products.jsx";
import Footer from "./pages/Footer.jsx";

function AnimatedPages({
  userInput,
  setUserInput,
  query,
  setQuery,
  setIsOpen,
  product,
  setModalProduct,
  products,
}) {
  const location = useLocation(null);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home products={products} />}></Route>

        <Route
          path="/cart"
          element={
            <Suspense fallback="LOADING">
              <Cart />
            </Suspense>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <Products
              userInput={userInput}
              setUserInput={setUserInput}
              query={query}
              setQuery={setQuery}
              setIsOpen={setIsOpen}
              setModalProduct={setModalProduct}
              product={product}
              products={products}
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = query
          ? `https://dummyjson.com/products/search?q=${query}`
          : "https://dummyjson.com/products";

        const response = await fetch(url);

        const data = await response.json();

        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [query]);

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
            products={products}
          />
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
