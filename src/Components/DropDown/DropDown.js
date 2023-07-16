import React from "react";
import styles from "./DropDown.module.css";

const DropDown = ({ dropDownTitle }) => {
  return (
    <select className={styles.dropDown} id="dropdown">
      <option className={styles.title}>{dropDownTitle}</option>
    </select>
  );
};

export default DropDown;
