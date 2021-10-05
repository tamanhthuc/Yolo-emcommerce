import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/ProductModalSlice";
import cartItemsSlice from "./shopping-cart/cartItemsSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlice,
  },
});
