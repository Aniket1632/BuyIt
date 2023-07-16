import React, { useState } from "react";
import { calculatePrice } from "../../../utils/calculation";
import { useSelector } from "react-redux";

import styles from "./TopSellingsMenu.module.css";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const TopSellingsMenu = () => {
  const { data: products } = useSelector((state) => state.products);

  return (
    <div className={styles.topSellingContainer}>
      <div className={styles.topSellingsHeader}>
        <span className={styles.topsellingTitleColor}>MACC</span>
        <span className={styles.topSellingsClothes}>TOP SELLINGS CLOTHES</span>
      </div>
      <div className={styles.productContainer}>
        {products.topSellingClothes.map((item, index) => (
          <div key={index} className={styles.productView}>
            <ProductCard
              shouldDispatch
              imageUrl={item.productImage}
              title={item.name}
              selectedItem={item}
              offerPrice={item.originalPrice}
              latestPrice={calculatePrice(
                item.originalPrice,
                item.offerPercentage
              )}
              isProductPrice
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingsMenu;
