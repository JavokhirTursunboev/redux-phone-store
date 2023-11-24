import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;

export const { clearCart } = cartSlice.actions;
