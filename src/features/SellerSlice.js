import { createSlice } from "@reduxjs/toolkit";
import product from '/data/Product.json?url'

const productSlice = createSlice({
  name: "seller",
  initialState: {
    newProducts:product.product||[],
  },
  reducers: {
    addProduct: (state, action) => {
      state.newProducts.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.newProducts = state.newProducts.filter((p) => p.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.newProducts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.newProducts[index] = action.payload;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
