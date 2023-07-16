const { createSlice } = require("@reduxjs/toolkit");

const productData = {
  topSellingClothes: [
    {
      id: 0,
      name: "BLACK DENIM SUIT",
      productImage: "black_denim_suit.png",
      originalPrice: 1000,
      offerPercentage: 40,
    },
    {
      id: 1,
      name: "BLACK DEINM JACKET",
      productImage: "black_denim_jacket.png",
      originalPrice: 1500,
      offerPercentage: 70,
    },
    {
      id: 2,
      name: "PURPLE DENIM SHIRT",
      productImage: "purple_denim_shirt.png",
      originalPrice: 2000,
      offerPercentage: 50,
    },
  ],
  weeklyDiscount: [
    {
      id: 3,
      name: "BODY SPRAY",
      productImage: "body_spray_product_image.png",
      originalPrice: 300,
      offerPercentage: 20,
      discount: 20,
    },
    {
      id: 4,
      name: "STAY FREE ULTRA PAD",
      productImage: "stayfree_product_image.png",
      originalPrice: 200,
      offerPercentage: 40,
      discount: 40,
    },
  ],
  topSelling: [
    {
      id: 5,
      name: "MASK",
      productImage: "mask_product_image.png",
      originalPrice: 200,
      offerPercentage: 10,
    },
    {
      id: 6,
      name: "BODY SPRAY",
      productImage: "body_spray_product_image.png",
      originalPrice: 200,
      offerPercentage: 40,
    },
    {
      id: 7,
      name: "STAY FREE ULTRA PAD",
      productImage: "stayfree_product_image.png",
      originalPrice: 200,
      offerPercentage: 40,
    },
  ],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: productData,
  },
  reducers: {
    setProducts(state, action) {
      state.data.selectedProduct = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
