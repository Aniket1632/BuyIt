import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerHeaderContainer}>
          <div className={styles.logo}>Buy it</div>
          <ul className={styles.bannerHeaderLeft}>
            <li>ABOUT US</li>
            <Link to="/product-page">
              {" "}
              <li>BEST SELLER</li>
            </Link>
            <li>CONTACT US</li>
          </ul>
          <ul className={styles.bannerHeaderRight}>
            <li>
              <img
                src={require("../../Assets/Image/Icons/profile_Icon.png")}
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../../Assets/Image/Icons/bell_Icon.png")}
                alt=""
              />
            </li>
            <Link to="/cart">
              <li>
                <img
                  src={require("../../Assets/Image/Icons/cart_Icon.png")}
                  alt=""
                />
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.tagLine}>
            <p>PROVIDING BEST ITEMS AT YOUR DOOR</p>
          </div>
          <div className={styles.bannerBottom}>
            <span>
              Buy IT has an important role in making supplies and services
              available to customers and their patients during this critical
              time. This includes services from various domains. Our aim is to
              aid you. As much we can.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
