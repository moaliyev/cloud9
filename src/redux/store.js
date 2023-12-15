import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./slices/mobileSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import sizeSlice from "./slices/sizeSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileSlice,
    cart: cartSlice,
    user: userSlice,
    size: sizeSlice,
  },
});
