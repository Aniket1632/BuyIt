import React from "react";
import styles from "./ProductCard.module.css";

import { useDispatch } from "react-redux";
import { setProducts } from "../../Store/productSlice";
import { Link } from "react-router-dom";

const ProductCard = ({
  imageUrl,
  title,
  offerPrice,
  latestPrice,
  discount,
  isDiscount,
  isProductPrice,
  customClass,
  onclick,
  selectedItem,
  shouldDispatch,
}) => {
  const dispatch = useDispatch();

  // console.log(selectedItem, "selectedItem");

  return (
    <Link to="/product-detail">
      <div
        className={styles.productContainer}
        onClick={() =>
          shouldDispatch ? dispatch(setProducts(selectedItem)) : null
        }
      >
        <div className={customClass ? customClass : styles.productCard}>
          <img src={require(`../../Assets/Image/${imageUrl}`)} alt="" />
          {isDiscount ? (
            <div className={styles.productDiscount}>{`${discount}% OFF`}</div>
          ) : null}
        </div>
        <div className={styles.productPrizeAndName}>
          <span>{title}</span>
          {isProductPrice ? (
            <div className={styles.productPrice}>
              <div className={styles.offerPrice}>₹{offerPrice}</div>
              {latestPrice}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
