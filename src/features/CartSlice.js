import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("cart/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/data/Product.json");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], 
    cartItems: [], 
    status: "idle",
    error: null,
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const product = state.products.find((p) => p.id === action.payload);
    //   if (product) {
    //     const existingItem = state.cartItems.find((item) => item.id === product.id);
    //     if (existingItem) {
    //       existingItem.quantity += 1;
    //     } else {
    //       state.cartItems.push({ ...product, quantity: 1 });
    //     }
    //   }
    // },

  
      addToCart: (state, action) => {
        const existingItem = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
      },

   
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
