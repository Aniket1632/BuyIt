import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ProductDetailInfo from "./ProductDetailInfo/ProductDetailInfo";
import Footer from "../../Components/Footer/Footer";
import WeeklyDiscount from "../Home/WeeklyDiscount/WeeklyDiscount";
import TopSellingsProduct from "../Home/TopSellingsProduct/TopSellingsProduct";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.prouctDetailcomponent}>
        <div className={styles.productDetailInfoComponent}>
          <ProductDetailInfo />
        </div>
        <div className={styles.productDetailWeeklyDiscount}>
          <WeeklyDiscount />
        </div>
        <div className={styles.productDetailTopSellingsProduct}>
          <TopSellingsProduct />
        </div>
      </div>
      <div className={styles.productDetailFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
