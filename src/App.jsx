import "./App.css";
import {
  Route,
  Routes,
  Navigate,
  useRoutes,
  Link,
  NavLink,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Products from "./pages/products";
import Product from "./pages/product";
import NewProduct from "./pages/newproduct";
import NotFound from "./pages/404";
import { useState } from "react";
import ProductsLayout from "./pages/ProductsLayout";

function App() {
  const [authenticated, setUserAuthentication] = useState(true);

  const toggleAuth = () => {
    setUserAuthentication(!authenticated);
  };
  return (
    <>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/auth"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Auth
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Products
        </NavLink>
      </nav>

      <button onClick={toggleAuth}>Toggle Authentication</button>
      <p>Current Auth Status: {authenticated.toString()}</p>

      <Routes>
        <Route
          path="/"
          element={authenticated ? <Home /> : <Navigate replace to="/auth" />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// function App() {
//   const element = useRoutes([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/auth",
//       element: <Auth />,
//     },
//   ]);

//   return element;
// }

export default App;
