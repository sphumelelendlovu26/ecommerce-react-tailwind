import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/components/NavBar.jsx";
import { useState, useEffect, lazy, Suspense } from "react";
import ModalProvider, { ModalContext } from "./Context/ModalContext.jsx";

import { AnimatePresence } from "framer-motion";
import ThemeProvider from "./Context/ThemeContext.jsx";
import Products from "./pages/Products.jsx";
import Footer from "./pages/Footer.jsx";

const Cart = lazy(() => import("./pages/Cart.jsx"));
function AnimatedPages({
  userInput,
  setUserInput,
  query,
  setQuery,
  product,
  products,
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Products
              userInput={userInput}
              setUserInput={setUserInput}
              query={query}
              setQuery={setQuery}
              product={product}
              products={products}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("");
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
        console.error(error);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <Navbar
            userInput={userInput}
            setUserInput={setUserInput}
            setQuery={setQuery}
            query={query}
          />

          <AnimatedPages
            userInput={userInput}
            setUserInput={setUserInput}
            setQuery={setQuery}
            query={query}
            products={products}
          />
        </BrowserRouter>
        <Footer />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
