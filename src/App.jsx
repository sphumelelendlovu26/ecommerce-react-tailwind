import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/HomeComponents/NavBar.jsx";
import { useState } from "react";
import ProductList from "./pages/Products.jsx";

import { motion, AnimatePresence } from "framer-motion";
import ThemeProvider from "./Context/ThemeContext.jsx";

function AnimatedPages({ userInput, setUserInput, query, setQuery }) {
  const location = useLocation(null);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <ProductList
              userInput={userInput}
              setUserInput={setUserInput}
              query={query}
              setQuery={setQuery}
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
  return (
    <ThemeProvider>
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
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
