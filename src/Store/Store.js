import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import testReducers from "./testSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    test: testReducers,
  },
});

export default store;
