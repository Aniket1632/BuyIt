import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onChange }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={styles.searchIcon}>
        <img
          src={require("../../../Assets/Image/Icons/Search_Icon.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchBar;
