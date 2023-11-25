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
    // ===================== CLEAR FUNCTION ===========//
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },

    // =========== REMOVE FUNCTION ============ //
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    // ============ INCREASE FUNCTION ========= //
    increaseItem: (state, { payload }) => {
      const findItem = state.cartItems.find((item) => item.id === payload);
      findItem.amount += 1;
    },

    //  ============== DECREASE FUNCTION =========//
    deacreaseItem: (state, { payload }) => {
      const findItem = state.cartItems.find((item) => item.id === payload);
      findItem.amount -= 1;
    },

    // ================ CALCULATE TOTAL FUNCTION ===========//

    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export default cartSlice.reducer;

export const { clearCart, removeItem, increaseItem, deacreaseItem, calculateTotal } = cartSlice.actions;
