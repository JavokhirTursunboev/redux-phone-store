import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

//! ============= GET CART ITEMS FUNCTION ==========//
// now i request to server to get data and i conver from data to json and i send extra reducer for pending response fullfil

export const getCartItems = createAsyncThunk("cart/getCartItems", async (name, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("something went wrong");
  }
});

export const cartSlice = createSlice({
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
  // !========= EXTRA REDUCERS =========== //

  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cartSlice.reducer;

export const { clearCart, removeItem, increaseItem, deacreaseItem, calculateTotal } = cartSlice.actions;
