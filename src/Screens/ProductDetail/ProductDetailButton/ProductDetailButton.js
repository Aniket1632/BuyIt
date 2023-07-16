import React from "react";
import styles from "./ProductDetailButton.module.css";

const ProductDetailButton = (selectedItem) => {
  return (
    <button type="button" className={styles.productDetailButton}>
      ADD TO CART
    </button>
  );
};

export default ProductDetailButton;
