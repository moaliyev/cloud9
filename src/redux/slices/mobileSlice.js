import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavActive: false,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    changeIsNavActive: state => {
      state.isNavActive = !state.isNavActive;
    },
  },
});

export const { changeIsNavActive } = mobileSlice.actions;

export default mobileSlice.reducer;
