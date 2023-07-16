import React, { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import BodySpray from "../../../Assets/Image/body_spray_product_image.png";
import VitaminC from "../../../Assets/Image/vitamin_c_product.png";
import Gloves from "../../../Assets/Image/glove_product.png";
import styles from "./Products.module.css";

const Products = ({ data }) => {
  return (
    <div className={styles.productPageProducts}>
      {data?.map((item) => (
        <div className={styles.productContainer}>
          <ProductCard
            title={item.name}
            customClass={styles.productCard}
            imageUrl={item.imageUrl}
            offerPrice={item.offerPrice}
            price={item.price}
            isProductPrice
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
