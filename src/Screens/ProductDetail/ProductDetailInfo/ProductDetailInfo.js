import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import ProductDetailButton from "../ProductDetailButton/ProductDetailButton";
import DropDown from "../../../Components/DropDown/DropDown";

import styles from "./ProductDetailInfo.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { calculatePrice } from "../../../utils/calculation";
import { useDispatch } from "react-redux";
import { add } from "../../../Store/cartSlice";

const ProductDetailInfo = () => {
  const dispatch = useDispatch();

  const { data: products } = useSelector((state) => state.products);
  const selectedProduct = products.selectedProduct;

  return (
    <div className={styles.productDetailInfo}>
      <div className={styles.productDetailProductCard}>
        <ProductCard
          imageUrl={selectedProduct.productImage}
          title={products?.selectedProduct?.name}
          offerPrice={products?.selectedProduct?.originalPrice}
          latestPrice={calculatePrice(
            products?.selectedProduct.originalPrice,
            products?.selectedProduct?.offerPercentage
          )}
          isProductPrice
        />
      </div>
      <div className={styles.productDetailContent}>
        <span className={styles.productName}>COLOROX WIPES</span>
        <div>
          <span className={styles.productPrice}>₹ 400</span>
        </div>
        <div className={styles.productColorType}>
          <span className={styles.blackColorProduct}>BLACK</span>
          <span className={styles.goldColorProduct}>GOLD</span>
          <span className={styles.apolloColorProduct}>APOLLO</span>
        </div>
        <div
          className={styles.productDetailInfoButton}
          onClick={() => dispatch(add(selectedProduct))}
        >
          <ProductDetailButton />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productInfoPara1}>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam qui fugiat quam est doloribus soluta modi ad quos
              impedit error voluptatum exercitationem aliquid cum dolorem
              consequatur, eligendi itaque fuga maxime.
            </span>
          </div>
          <div className={styles.productInfoPara2}>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam qui fugiat quam est doloribus soluta modi ad quos
              impedit error voluptatum exercitationem aliquid cum dolorem
              consequatur, eligendi itaque fuga maxime.
            </span>
          </div>
        </div>
        <div className={styles.dropDownBar}>
          <DropDown dropDownTitle="Description" />
          <div className={styles.dropDownBar2}>
            <DropDown dropDownTitle="Return Policy" />
          </div>
          <div className={styles.dropDownBar3}>
            <DropDown dropDownTitle="Citizen Policy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
