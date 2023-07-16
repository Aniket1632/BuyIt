const { createSlice } = require("@reduxjs/toolkit");

const data = {
  cartProducts: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: data,
  },
  reducers: {
    add: (state, action) => {
      state.data.cartProducts.push(action.payload);
      state.data.count = state.data.count + 1;
    },

    remove: (state, action) => {
      state.data.cartProducts = state.data.cartProducts.filter(
        (item) => item.id !== action.payload
      );
      state.data.count = state.data.count - 1;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
