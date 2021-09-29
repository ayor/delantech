import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  totalPrice: 0
}

const calculcateTotal = (state) => {
  let total = 0;
  state.value.forEach(item => total += Number.parseInt(item.price * item.qty));
  state.totalPrice = total;
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {

    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    decrement: (state, action) => {
      state.value.forEach(item => {
        if (item.id === action.payload) {
          if (item.qty <= 1) { return; }
          item.qty -= 1;
        }
      })
      calculcateTotal(state);
    },
    increment: (state, action) => {

      state.value.forEach(item => {
        if (item.id === action.payload) {

          item.qty += 1;
        }
      });

      calculcateTotal(state);

    },
    deleteCartItem: (state, action) => {

      const newState = state.value.filter(item => item.id !== action.payload);
      state.value = [...newState]
      calculcateTotal(state);
    },
    updateQty: (state, action) => {

      if (action.payload.qty <= 0) {
        return;
      }
      state.value.forEach(item => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
      });
      calculcateTotal(state);
    },
    addToCart: (state, action) => {

      let data = {
        ...action.payload,
        qty: 1
      };
      let _state = [...state.value];
      let cartItem = _state.find(item => item.id === data.id);
      if (cartItem) {
        state.value.forEach(item => {
          if (item.id === data.id) {
            item.qty += 1
          }
        })

      } else {
        state.value.push(data);
      }
      calculcateTotal(state);

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrement, deleteCartItem, increment, updateQty } = cartSlice.actions

export default cartSlice.reducer