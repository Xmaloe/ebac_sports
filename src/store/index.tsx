import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import favoritosReducer from './slices/favoritosSlice'
import { api } from '../store/slices/services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
