import React, { useState } from "react";
import { useSelector } from "react-redux";
import { calculatePrice } from "../../../utils/calculation";

import styles from "./WeeklyDiscount.module.css";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const WeeklyDiscount = () => {
  const { data: products } = useSelector((state) => state.products);

  return (
    <div className={styles.weeklyDiscountContent}>
      <div className={styles.weeklyDiscountLeft}>
        <img
          className={styles.weeklyDiscountImage}
          src={require("../../../Assets/Image/weekly_dicount.png")}
          alt=""
        />
      </div>
      <div className={styles.weeklyDiscountRight}>
        <div className={styles.weeklyDiscountHeader}>
          <span className={styles.weeklyDiscountTitleColor}> MACC</span>
          <span className={styles.weeklyDiscountTitle}> WEEKLY DISCOUNT</span>
        </div>
        <div className={styles.weeklyDiscountProductCard}>
          {products.weeklyDiscount.map((item, index) => (
            <div key={index} className={styles.weeklyDiscountProductCard1}>
              <ProductCard
                shouldDispatch
                imageUrl={item.productImage}
                title={item.name}
                offerPrice={item.originalPrice}
                selectedItem={item}
                latestPrice={calculatePrice(
                  item.originalPrice,
                  item.offerPercentage
                )}
                discount={item.discount}
                isDiscount
                isProductPrice
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WeeklyDiscount;
