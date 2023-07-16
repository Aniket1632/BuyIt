import React from "react";
import Banner from "../../Components/Banner/Banner";
import TopSellings from "./TopSellingsMenu/TopSellingsMenu";
import WeeklyDiscount from "./WeeklyDiscount/WeeklyDiscount";
import TopSellingsProduct from "./TopSellingsProduct/TopSellingsProduct";
import Footer from "../../Components/Footer/Footer";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <div className={styles.topSellingsComponent}>
          <TopSellings />
        </div>
        <div className={styles.weeklyDiscountComponent}>
          <WeeklyDiscount />
        </div>
        <div className={styles.topSellingsProductComponent}>
          <TopSellingsProduct />
        </div>
      </div>
      <div className={styles.footerComponent}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
