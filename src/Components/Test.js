import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/testSlice";

const Test = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  console.log(product, "product");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");

  //     const products = await response.json();

  //     console.log(products);
  //   };

  //   fetchProducts();
  // });

  // console.log(product, "product");

  return (
    <div>
      {product.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Test;
