/* configureStore */

import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import counterReducer from "../features/counterSlice";

export default configureStore({
    reducer: {
        shopReducer,
        counterReducer
    }
});