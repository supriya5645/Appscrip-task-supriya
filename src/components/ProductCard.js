import React from "react";
import styles from "../styles/productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} className={styles.images} alt={product.title} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{product.title}</h2>
        <p className={styles.cardDescription}>{product.description}</p>
        <p className={styles.cardPrice}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
