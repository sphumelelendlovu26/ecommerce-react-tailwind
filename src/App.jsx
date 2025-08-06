import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/HomeComponents/NavBar.jsx";
import { useState } from "react";
import ProductList from "./pages/Products.jsx";

function App() {
  const [userInput, setUserInput] = useState("");
  return (
    <BrowserRouter>
      <Navbar userInput={userInput} setUserInput={setUserInput} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <ProductList userInput={userInput} setUserInput={setUserInput} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
