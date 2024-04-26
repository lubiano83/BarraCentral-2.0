/* store */

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "../features/counterSlice";
import cartReducer from "../features/cartSlice";
import shopReducer from "../features/shopSlice";
import { shopApi } from "../services/shopService";
import globalReducer from "../features/globalSlice";
import authReducer from "../features/userSlice";
import { authApi } from "../services/authService";

const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        globalReducer,
        authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
}); 

setupListeners(store.dispatch);
export default store;