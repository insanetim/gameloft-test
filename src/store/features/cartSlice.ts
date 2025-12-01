import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { calculateItemPrice } from "../../lib/calculateItemPrice"
import { roundToPrecision } from "../../lib/roundToPrecision"
import type { CartItemType, Product } from "../../types"

interface CartState {
  items: CartItemType[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<CartItemType["id"]>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity++
      }
    },
    decrementQuantity: (state, action: PayloadAction<CartItemType["id"]>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity--
      }
    },
    removeCartItem: (state, action: PayloadAction<CartItemType["id"]>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
  selectors: {
    selectCartItems: state => state.items,
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeCartItem,
} = cartSlice.actions

export const { selectCartItems } = cartSlice.selectors

export const selectTotalQuantity = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0)
}

export const selectTotalPrice = (state: { cart: CartState }) => {
  return roundToPrecision(
    state.cart.items.reduce(
      (total, item) => total + calculateItemPrice(item.price, item.quantity),
      0
    )
  )
}

export default cartSlice
