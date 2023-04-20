import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, cartSlice)
export const store = configureStore({
  reducer: {
    cart:persistedReducer
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)