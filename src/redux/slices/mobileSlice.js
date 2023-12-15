import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavActive: false,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    changeIsNavActive: (state, action) => {
      state.isNavActive = action.payload;
    },
  },
});

export const { changeIsNavActive } = mobileSlice.actions;

export default mobileSlice.reducer;
