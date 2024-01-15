import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Products from "./pages/products";
import Product from "./pages/product";
import { useState } from "react";

function App() {
  const [authenticated, setUserAuthentication] = useState(true);

  const toggleAuth = () => {
    setUserAuthentication(!authenticated);
  };
  return (
    <>
      <button onClick={toggleAuth}>Toggle Authentication</button>
      <p>Current Auth Status: {authenticated.toString()}</p>

      <Routes>
        <Route
          path="/"
          element={authenticated ? <Home /> : <Navigate replace to="/auth" />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
