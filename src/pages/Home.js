import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import ProductList from "../components/ProductList";
import styles from "../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Product Listing Page</title>
        <meta
          name="description"
          content="A simple product listing page using React.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <h1>Product Listing Page</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
