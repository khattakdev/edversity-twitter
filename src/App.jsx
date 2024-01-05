import { useState, useEffect } from "react";
// import Home from "./pages/Home";
// import Auth from "./pages/Auth";

import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((result) => {
    //     console.log(result.products);
    //     setProducts(result.products);
    //   });
  }, []);

  // useEffect(() => {
  //   console.log("Use Effect - update number")
  //   // API Call
  // }, [number])

  const fetchProducts = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProducts(result.products);
        setLoading(false);
      });
  };

  return (
    <>
      <button onClick={fetchProducts}>Fetch Products</button>
      {loading == true ? <p>Loading...</p> : ""}
      {products.map((product, index) => {
        return (
          <div key={index}>
            <img src={product.thumbnail} />
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
      {/* <Home /> */}
      {/* <Auth /> */}
    </>
  );
}

export default App;
