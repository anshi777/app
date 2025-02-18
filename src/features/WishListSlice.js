import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const productIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.wishlist[productIndex].qty += 1;
      } else {
        state.wishlist.push({ ...action.payload, qty: 1 });
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increaseQty: (state, action) => {
      const productIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.wishlist[productIndex].qty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const productIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex !== -1 && state.wishlist[productIndex].qty > 1) {
        state.wishlist[productIndex].qty -= 1;
      } else {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, increaseQty, decreaseQty } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
