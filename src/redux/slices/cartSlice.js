import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        item =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item?.customName === action.payload?.customName
      );
      existingItem
        ? ++existingItem.productCount
        : state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      let existingProduct = state.cart.find(
        item =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item?.customName === action.payload?.customName
      );
      existingProduct.productCount - 1 < 1
        ? (state.cart = state.cart.filter(item => item !== existingProduct))
        : --existingProduct.productCount;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
