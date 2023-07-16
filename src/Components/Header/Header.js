import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { data: cart } = useSelector((state) => state.cart);
  const cartCounter = cart.count;

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.logo}>Buy it</div>
        <ul className={styles.HeaderLeft}>
          <li>ABOUT US</li>
          <Link to="/product-page">
            {" "}
            <li>BEST SELLER</li>
          </Link>
          <li>CONTACT US</li>
        </ul>
        <ul className={styles.HeaderRight}>
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
              {/* <div>
                <img
                  className={styles.cartRedDot}
                  src={require("../../Assets/Image/Icons/red_Dot.png")}
                  alt=""
                />
              </div> */}
              <div className={styles.cartCircle}>
                <span className={styles.cartCounter}>{cartCounter}</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
