import React from "react";
import styles from "./IconCircle.module.css";

const IconCircle = ({ iconCircle }) => {
  return (
    <div className={styles.iconCircleIcon}>
      <div className={styles.socialMediaIcon}>
        <img src={iconCircle} alt="" />
      </div>
    </div>
  );
};

export default IconCircle;
