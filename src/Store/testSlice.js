const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  product: [],
};

const testSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setTest(state, action) {
      // state = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setTest } = testSlice.actions;
export default testSlice.reducer;

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});
