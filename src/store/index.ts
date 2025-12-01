import { combineSlices, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice"

const rootReducer = combineSlices(cartSlice)

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
