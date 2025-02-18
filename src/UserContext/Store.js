import { configureStore} from "@reduxjs/toolkit";
import productSlices from '../features/ProductSlice'
import authReducer from '../features/AuthSlice';
import cartReducer from '../features/CartSlice'
import wishlistReducer from '../features/WishListSlice'
import sellerReducer from '../features/SellerSlice'


const store = configureStore({
    reducer :{
product:productSlices,
auth: authReducer,
    cart: cartReducer,
    wishlist:wishlistReducer,
    seller:sellerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, 
        }),
})

export default store;
