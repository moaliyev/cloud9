import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSizesModalActive: false,
};

const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    setIsSizesModalActive: state => {
      state.isSizesModalActive = !state.isSizesModalActive;
    },
  },
});

export const { setIsSizesModalActive } = sizeSlice.actions;

export default sizeSlice.reducer;
