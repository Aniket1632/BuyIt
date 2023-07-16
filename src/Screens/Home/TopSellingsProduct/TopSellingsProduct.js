import React, { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import styles from "./TopSellingsProduct.module.css";
import sprayImg from "../../../Assets/Image/body_spray_product_image.png";
import stayFreeImg from "../../../Assets/Image/stayfree_product_image.png";
import maskImg from "../../../Assets/Image/mask_product_image.png";

import { useSelector } from "react-redux";

const TopSellingsProduct = (isproductCardClass) => {
  const { data: products } = useSelector((state) => state.products);

  return (
    <div className={styles.topSellingContent}>
      <div className={styles.topSellingProductHeader}>
        <span className={styles.TopSellingProductTitleColor}> MACC </span>
        <span className={styles.TopSellingProductTitle}> TOP SELLINGS</span>
      </div>
      <div className={styles.topSellingProductCard}>
        {products.topSelling.map((item, index) => (
          <div
            key={index}
            className={
              (index === 0) | (index === 2)
                ? styles.specialTopSellingCard
                : styles.specialtopSellingCard2
            }
          >
            <ProductCard
              shouldDispatch
              imageUrl={item.productImage}
              title={item.name}
              selectedItem={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingsProduct;
