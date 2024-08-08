import React from "react";
import ProductCard from "./ProductCard";
import styles from "../App.css";



const ProductList = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
