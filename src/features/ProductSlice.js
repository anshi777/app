// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productService from "../services/productService";

// export const getProducts = createAsyncThunk("products/fetch", async () => {
//   return await productService.fetchProducts();
// });


// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//     searchQuery: "",
//   },
//   reducers: {
//     handleSearch: (state, action) => {
//       state.searchQuery = action.payload.toLowerCase(); 
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const {handleSearch} = productSlice.actions;

// export default productSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/productService";


export const getProducts = createAsyncThunk("products/fetch", async () => {
  return await productService.fetchProducts();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
    searchTerm: "",
  },
  reducers: {
    handleSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
    // addProduct: (state, action) => {
    //   state.products.push(action.payload);
    // },

    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { handleSearch ,addProduct,deleteProduct,updateProduct} = productSlice.actions;
export default productSlice.reducer;
