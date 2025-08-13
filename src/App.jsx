import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/HomeComponents/NavBar.jsx";
import { useState } from "react";
import ProductList from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedPages({ userInput, setUserInput }) {
  const location = useLocation(null);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <ProductList userInput={userInput} setUserInput={setUserInput} />
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [userInput, setUserInput] = useState("");
  return (
    <BrowserRouter>
      <Navbar userInput={userInput} setUserInput={setUserInput} />
      <AnimatedPages userInput={userInput} setUserInput={setUserInput} />
    </BrowserRouter>
  );
}

export default App;
