import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.stringify(localStorage.getItem("token"))
    : null,
  user: {},
  userIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserIn: (state, action) => {
      state.userIn = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser, setUserIn } = userSlice.actions;
