import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './authentication/authSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import cartSlice from "./cart/cartSlice";
import orderSlice from "./order/orderSlice";
  
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','cart','order']
}
const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartSlice,
    order: orderSlice
    
},);

const persistedReducer = persistReducer(persistConfig, rootReducer)
 


export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

