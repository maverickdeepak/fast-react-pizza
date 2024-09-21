import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: 'Mediterranean',
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item to cart
    addToCart(state, action) {
      state.cart.push(action.payload);
    },

    // remove item from cart
    removeFromCart(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.pizzaid !== action.payload);
    },

    // increase particular item quantity
    increaseItemQuantity(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.pizzaid === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.unitPrice,
          };
        }
        return item;
      });
    },

    // decrease particular item quantity
    decreaseItemQuantity(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.unitPrice,
          };
        }
        return item;
      });
    },

    // empty the cart
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
