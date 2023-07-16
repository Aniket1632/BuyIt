import React, { useState } from "react";
import Header from "./../../Components/Header/Header";
import ItemCard from "./ItemCard/ItemCard";
import BodySpray from "../../Assets/Image/body_spray_product_image.png";
import Mask from "../../Assets/Image/mask_product_image.png";
import BlackDenimSuit from "../../Assets/Image/black_denim_suit.png";
import BlackDenimJacket from "../../Assets/Image/black_denim_jacket.png";
import PurpleDenimShirt from "../../Assets/Image/purple_denim_shirt.png";
import StayFree from "../../Assets/Image//stayfree_product_image.png";
import Footer from "../../Components/Footer/Footer";

import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { calculatePrice } from "../../utils/calculation";

const Cart = () => {
  const { data: cart } = useSelector((state) => state.cart);
  const cartProduct = cart.cartProducts;

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.cartContainer}>
        <span className={styles.yourCart}>Your Cart</span>
        <div className={styles.cartIndex}>
          <ul className={styles.cartIndexDetail}>
            <li className={styles.itemIndex}>Item</li>
            <li className={styles.descriptionIndex}>Description</li>
            <li className={styles.priceIndex}>Price</li>
            <li className={styles.actionIndex}>Action</li>
          </ul>
        </div>
        <div className={styles.cartItem}>
          {cartProduct?.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              // itemImage={item.productImage}
              // itemName={item.name}
              // latestPrice={calculatePrice(
              //   item.originalPrice,
              //   item.offerPercentage
              // )}
              // id={item.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
