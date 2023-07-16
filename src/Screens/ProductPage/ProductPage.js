import React, { useState } from "react";

import Header from "../../Components/Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Products from "./Products/Products";
import Footer from "../../Components/Footer/Footer";
import styles from "./ProductPage.module.css";
import BodySpray from "../../Assets/Image/body_spray_product_image.png";
import VitaminC from "../../Assets/Image/vitamin_c_product.png";
import Gloves from "../../Assets/Image/glove_product.png";

const ProductPage = () => {
  const [data, setData] = useState([
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "VITAMIN C",
      imageUrl: "vitamin_c_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "HAND GLOVES",
      imageUrl: "glove_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "VITAMIN C",
      imageUrl: "vitamin_c_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "HAND GLOVES",
      imageUrl: "glove_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "VITAMIN C",
      imageUrl: "vitamin_c_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "HAND GLOVES",
      imageUrl: "glove_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "BODY SPRAY",
      imageUrl: "body_spray_product_image.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "VITAMIN C",
      imageUrl: "vitamin_c_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
    {
      name: "HAND GLOVES",
      imageUrl: "glove_product.png",
      offerPrice: "₹500",
      price: "₹400",
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    const filtered = data.filter((item) => {
      // Perform filtering logic based on your requirements
      // For example, check if the item's name includes the search query
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      <div className={styles.searchBarComponent}>
        <SearchBar data={data} onChange={handleSearch} />
      </div>
      <div className={styles.productsComponent}>
        <Products data={filteredData} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
