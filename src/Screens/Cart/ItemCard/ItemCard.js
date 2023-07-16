import React from "react";
import RemoveButton from "../RemoveButton/RemoveButton";
import styles from "./ItemCard.module.css";

import { remove } from "../../../Store/cartSlice";
import { useDispatch } from "react-redux";
import { calculatePrice } from "../../../utils/calculation";

const ItemCard = ({ item }) => {
  const disptach = useDispatch();

  return (
    <div className={styles.itemCard}>
      <img
        className={styles.itemCardImage}
        src={require(`../../../Assets/Image/${item.productImage}`)}
        alt=""
      />

      <span className={styles.description}>{item.name} </span>
      <span className={styles.price}>
        {" "}
        {calculatePrice(item.originalPrice, item.offerPercentage)}
      </span>
      <span
        className={styles.action}
        onClick={() => {
          disptach(remove(item.id));
        }}
      >
        <RemoveButton />
      </span>
    </div>
  );
};

export default ItemCard;
