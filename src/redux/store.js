import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./slices/mobileSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileSlice,
    cart: cartSlice,
  },
});
