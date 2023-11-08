import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./slices/mobileSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileSlice,
  },
});
