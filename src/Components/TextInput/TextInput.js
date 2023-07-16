import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ iconSufix, placeholder }) => {
  return (
    <div className={styles.textInputContainer}>
      <input
        className={styles.inputContent}
        type="text"
        placeholder={placeholder}
      />
      <img className={styles.iconSufix} src={iconSufix} alt="" />
    </div>
  );
};

export default TextInput;
